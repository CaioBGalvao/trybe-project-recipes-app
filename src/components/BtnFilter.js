import React, { useContext } from 'react';
import CategoriesContext from '../context/CategoriesContext';

function BtnFilter() {
  // const {
  //   // requestCategories,
  //   // categoriesFoods,
  // } = useContext(CategoriesContext);

  const NUMBER_FIVE = 5;
  const { meals } = categoriesFoods;

  const { drinks } = categoriesDrinks;

  function handleClickFilterFood() {
    meals.slice(0, NUMBER_FIVE).map((recipe) => (
      <div
        key={ recipe.idMeal }
        data-testid={ `${recipe.idMeal}-recipe-card` }
      >
        <img
          data-testid={ `${recipe.idMeal}-card-img` }
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
        />
        <h2
          data-testid={ `${recipe.idMeal}-card-name` }
        >
          {recipe.strMeal}

        </h2>
      </div>));
  }

  return (
    <div>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        All
      </button>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        Beef
      </button>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        Lamb

      </button>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        Chicken

      </button>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        Breakfast

      </button>
      <button
        type="button"
        // data-testid={ `${categoryName}-category-filter` }
        onClick={ handleClickFilterFood }
      >
        Dessert

      </button>
    </div>
  );
}

export default BtnFilter;
