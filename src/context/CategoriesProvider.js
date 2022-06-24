import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CategoriesContext from './CategoriesContext';
import fetchApiCategoriesDrinks from '../services/fetchApiCategoriesDrinks';
import fetchApiCategoriesFoods from '../services/fetchApiCategoriesFood';

function CategoriesProvider({ children }) {
  const [categoriesFoods, setCategoriesFoods] = useState({ meals: [] });
  const [categoriesDrinks, setCategoriesDrinks] = useState({ drinks: [] });

  const requestCategories = async (path) => {
    if (path === '/foods') {
      const apiCategoryFood = await fetchApiCategoriesFoods();
      setCategoriesFoods(apiCategoryFood);
    } else if (path === '/drinks') {
      const apiCategoryDrink = await fetchApiCategoriesDrinks();
      setCategoriesDrinks(apiCategoryDrink);
    }
  };

  const contextValue = {
    requestCategories,
    categoriesFoods,
    categoriesDrinks,
  };

  return (
    <CategoriesContext.Provider value={ contextValue }>
      {children}
    </CategoriesContext.Provider>
  );
}

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoriesProvider;
