import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CategoriesContext from '../context/CategoriesContext';
import RevenuesContext from '../context/RevenuesContext';

function BtnFilter({ pathname }) {
  const {
    categoriesFoods,
    categoriesDrinks,
  } = useContext(CategoriesContext);

  const {
    requestRevenues,
  } = useContext(RevenuesContext);

  const NUMBER_FIVE = 5;
  const { meals } = categoriesFoods;
  const { drinks } = categoriesDrinks;
  let category;

  if (pathname === '/foods') {
    category = meals.slice(0, NUMBER_FIVE);
  }
  if (pathname === '/drinks') {
    category = drinks.slice(0, NUMBER_FIVE);
  }

  return (
    <>
      <button
        type="button"
        onClick={ () => {
          requestRevenues('search.php?s=', pathname, false);
        } }
        data-testid="All-category-filter"
      >
        All
      </button>
      {category.map((categoryName, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => {
            requestRevenues(`filter.php?c=${categoryName.strCategory}`, pathname, false);
          } }
          data-testid={ `${categoryName.strCategory}-category-filter` }
        >
          {`${categoryName.strCategory}`}
        </button>
      ))}
    </>
  );
}

BtnFilter.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default BtnFilter;
