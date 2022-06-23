import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from './RevenuesContext';
import fetchApiFood from '../services/fetchApiFood';
import fetchApiDrink from '../services/fetchApiDrinks';

function Provider({ children }) {
  const [resultFood, setResultFood] = useState({ meals: [] });
  const [resultDrink, setResultDrink] = useState({ drinks: [] });

  const requestRevenues = async (argumento, path) => {
    if (path === '/foods') {
      const apiResultFood = await fetchApiFood(argumento);
      setResultFood(apiResultFood);
    } else if (path === '/drinks') {
      const apiResultDrink = await fetchApiDrink(argumento);
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
