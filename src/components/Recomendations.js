import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CarouselComp from './carousel/CarouselComp';

const MAX_LENGTH_OF_CARDS = 6;

export default function Recomendations({ typeOfRecipe }) {
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    const ENDPOINT_RECOMENDED_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const ENDPOINT_RECOMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const handleFetchApi = async () => {
      if (typeOfRecipe !== 'foods') {
        const responseMeals = await fetch(ENDPOINT_RECOMENDED_MEALS);
        const { meals } = await responseMeals.json();

        setRecomendations(meals.slice(0, MAX_LENGTH_OF_CARDS));
      } else {
        const response = await fetch(ENDPOINT_RECOMENDED_DRINKS);
        const { drinks } = await response.json();
        setRecomendations(drinks.slice(0, MAX_LENGTH_OF_CARDS));
      }
    };

    handleFetchApi();
  }, [typeOfRecipe]);

  return (
    recomendations ? (
      <CarouselComp>
        {
          recomendations.map((recipe, index) => {
            if (typeOfRecipe !== 'foods') {
              return (
                <div
                  key={ recipe.idMeal }
                  data-testid={ `${index}-recomendation-card` }
                >
                  <Link to={ `/foods/${recipe.idMeal}` }>
                    <img
                      src={ recipe.strMealThumb }
                      alt={ recipe.strMeal }
                    />
                    <h1
                      style={ { textAlign: 'center' } }
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {recipe.strMeal}
                    </h1>
                  </Link>
                </div>
              );
            }
            return (
              <div
                key={ recipe.idDrink }
                data-testid={ `${index}-recomendation-card` }
              >
                <Link to={ `/drinks/${recipe.idDrink}` }>
                  <img
                    src={ recipe.strDrinkThumb }
                    alt={ recipe.strDrink }
                  />
                  <h1
                    style={ { textAlign: 'center' } }
                    data-testid={ `${index}-recomendation-title` }
                  >
                    {recipe.strDrink}
                  </h1>
                </Link>
              </div>
            );
          })
        }
      </CarouselComp>
    ) : (
      <p>loading...</p>
    )
  );
}

Recomendations.propTypes = {
  typeOfRecipe: PropTypes.string,
}.isRequired;
