import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';

function CardList({ title }) {
  const {
    resultDrink,
    resultFood,
  } = useContext(RevenuesContext);

  const NUMBER_TWELVE = 12;
  const { meals } = resultFood;
  const { drinks } = resultDrink;

  const foodRenderCard = () => (meals.length > 1
    ? meals.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <div
        key={ recipe.idMeal }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          {recipe.strMeal}

        </h2>
      </div>))
    : null);

  const drinkRenderCard = () => (drinks.length > 1
    ? drinks.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <div
        key={ recipe.idDrink }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          {recipe.strDrink}

        </h2>
      </div>))
    : null);

  if (title === 'Foods') {
    return foodRenderCard();
  }
  if (title === 'Drinks') {
    return drinkRenderCard();
  }
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardList;
