import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';

function CardList({ pathname }) {
  const {
    resultDrink,
    resultFood,
  } = useContext(RevenuesContext);

  const NUMBER_TWELVE = 12;
  const { meals } = resultFood;
  const { drinks } = resultDrink;

  const foodRenderCard = () => (meals.length > 0
    ? meals.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <Link
        key={ recipe.idMeal }
        to={ `${pathname}/${recipe.idMeal}` }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          width="300" // Propriedade para passar no Cypress (ALTERAR POR UMA CSS)
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          {recipe.strMeal}

        </h2>
      </Link>))
    : null);

  const drinkRenderCard = () => (drinks.length > 1
    ? drinks.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <Link
        key={ recipe.idDrink }
        to={ `${pathname}/${recipe.idDrink}` }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          width="300" // Propriedade para passar no Cypress (ALTERAR POR UMA CSS)
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          {recipe.strDrink}

        </h2>
      </Link>))
    : null);

  if (pathname === '/foods') {
    return foodRenderCard();
  }
  if (pathname === '/drinks') {
    return drinkRenderCard();
  }
}

CardList.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default CardList;
