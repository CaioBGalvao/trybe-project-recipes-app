import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from './RevenuesContext';
import fetchApiFood from '../services/fetchApiFood';
import fetchApiDrink from '../services/fetchApiDrinks';

function Provider({ children }) {
  const [resultFood, setResultFood] = useState({ meals: [] });
  const [resultDrink, setResultDrink] = useState({ drinks: [] });
  const history = useHistory();

  const requestRevenues = async (argumento, path, serchtype = true) => {
    if (path === '/foods') {
      const apiResultFood = await fetchApiFood(argumento);
      const { meals } = apiResultFood;
      if (meals === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return;
      }
      if (meals.length === 1 && serchtype) {
        return history.push(`/foods/${meals[0].idMeal}`);
      }
      setResultFood(apiResultFood);
    } else if (path === '/drinks') {
      const apiResultDrink = await fetchApiDrink(argumento);
      const { drinks } = apiResultDrink;
      if (drinks === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return;
      }
      if (drinks.length === 1 && serchtype) {
        return history.push(`/drinks/${drinks[0].idDrink}`);
      }
      setResultDrink(apiResultDrink);
    }
  };

  const contextValue = {
    resultFood,
    resultDrink,
    requestRevenues,
    setResultFood,
    setResultDrink,
  };

  return (
    <RevenuesContext.Provider value={ contextValue }>
      {children}
    </RevenuesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
