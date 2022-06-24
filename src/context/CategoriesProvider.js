import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CategoriesContext from './CategoriesContext';
import fetchApiCategoriesDrinks from '../services/fetchApiCategoriesDrinks';
import fetchApiCategoriesFoods from '../services/fetchApiCategoriesFood';

function CategoriesProvider({ children }) {
  const [categoriesFoods, setCategoriesFoods] = useState({ meals: [] });
  const [categoriesDrinks, setCategoriesDrinks] = useState({ drinks: [] });

  const requestCategories = async (path) => {
    if (path === '/foods') {
      const apiResultFood = await fetchApiCategoriesFoods();
      setCategoriesFoods(apiResultFood);
    } else if (path === '/drinks') {
      const apiResultDrink = await fetchApiCategoriesDrinks();
      setCategoriesDrinks(apiResultDrink);
    }
  };

  useEffect(() => {
    requestCategories();
  }, []);

  useEffect(() => {
    console.log(categoriesFoods);
  }, [categoriesFoods]);

  const contextValue = {
    requestCategories,
    categoriesFoods,
    setCategoriesFoods,
    categoriesDrinks,
    setCategoriesDrinks,
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
