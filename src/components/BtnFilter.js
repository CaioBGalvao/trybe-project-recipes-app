import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CategoriesContext from '../context/CategoriesContext';

function BtnFilter({ title }) {
  const {
    categoriesFoods,
    categoriesDrinks,
  } = useContext(CategoriesContext);

  const NUMBER_FIVE = 5;
  const { meals } = categoriesFoods;
  const { drinks } = categoriesDrinks;
  let category;

  if (title === 'Foods') {
    category = meals.slice(0, NUMBER_FIVE);
  }
  if (title === 'Drinks') {
    category = drinks.slice(0, NUMBER_FIVE);
  }

  const handleCategory = () => {
    console.log('Categoria Clicada!');
  };

  console.log(category);

  return (
    <>
      <button
        type="button"
        onClick={ handleCategory }
        data-testid="All-category-filter"
      >
        All
      </button>
      {category.map((categoryName, index) => (
        <button
          key={ index }
          type="button"
          onClick={ handleCategory }
          data-testid={ `${categoryName.strCategory}-category-filter` }
        >
          {`${categoryName.strCategory}`}
        </button>
      ))}
    </>
  );
}

BtnFilter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BtnFilter;
