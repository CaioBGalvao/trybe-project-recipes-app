import React, { useState, useContext } from 'react';
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

  const [toggleFilter, setToggleFilter] = useState('');

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

  const handleFilterButton = (target, categoryName) => {
    if (toggleFilter !== target.value) {
      requestRevenues(`filter.php?c=${categoryName}`, pathname, false);
      setToggleFilter(target.value);
    }
    if (toggleFilter === target.value) {
      requestRevenues('search.php?s=', pathname, false);
      setToggleFilter('');
    }
    // requestRevenues(`filter.php?c=${categoryName.strCategory}`, pathname, false);
  };

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
          value={ categoryName.strCategory }
          onClick={ ({ target }) => handleFilterButton(target, categoryName.strCategory) }
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
