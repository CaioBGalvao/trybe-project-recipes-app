import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [revenuesSearch, setRevenuesSearch] = useState('');
  const [ingredientRadio, setIngredientRadio] = useState(false);
  const [nameRadio, setNameRadio] = useState(false);
  const [firstLetterRadio, setFirstLetterRadio] = useState(false);
  const [myRoute, setMyRoute] = useState('');
  const [apiReponse, setApiReponse] = useState({});

  const contextValue = {
    revenuesSearch,
    setRevenuesSearch,
    ingredientRadio,
    setIngredientRadio,
    nameRadio,
    setNameRadio,
    firstLetterRadio,
    setFirstLetterRadio,
    myRoute,
    setMyRoute,
    apiReponse,
    setApiReponse,
  };

  useEffect(() => {
    const fetchApi = async () => {
      let endpoint = '';
      if (ingredientRadio === true) {
        endpoint = `filter.php?i=${revenuesSearch}`;
      } else if (nameRadio === true) {
        endpoint = `search.php?s=${revenuesSearch}`;
      } else if (firstLetterRadio === true && revenuesSearch.length === 1) {
        endpoint = `search.php?s=${revenuesSearch}`;
      } else {
        global.alert('Your search must have only 1 (one) character');
      }

      try {
        if (myRoute === 'foods') {
          const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/${endpoint}`);
          const results = await promise.json();
          setApiReponse(results);
        } else if (myRoute === 'drinks') {
          const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`);
          const results = await promise.json();
          setApiReponse(results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [revenuesSearch, ingredientRadio, nameRadio, firstLetterRadio, myRoute]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
