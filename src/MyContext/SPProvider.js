import React from 'react';
import PropTypes from 'prop-types';
import SPContext from './SPContext';

export default function SPProvider({ children }) {
  const handleDeleteFromLocalStorage = (typeOfRecipe, id, input) => {
    const inicialProgress = JSON.parse(
      window.localStorage.getItem('inProgressRecipes'),
    ) || { meals: {}, cocktails: {} };

    const isTheRecipeInProgress = Object.keys(
      inicialProgress[typeOfRecipe],
    ).includes(id);

    if (isTheRecipeInProgress) {
      const ingredients = inicialProgress[typeOfRecipe][id];
      const filteredIngredients = ingredients.filter((ingredient) => (
        ingredient !== input
      ));

      const progressValues = Object.values(inicialProgress);

      const newProgress = {
        ...inicialProgress,
        [typeOfRecipe]: {
          ...inicialProgress[typeOfRecipe],
          ...progressValues[typeOfRecipe],
          [id]: filteredIngredients,
        },
      };

      window.localStorage.setItem(
        'inProgressRecipes', JSON.stringify(newProgress),
      );
    }
  };

  const handleAddToLocalStorage = (typeOfRecipe, id, input) => {
    const inicialProgress = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    ) || { meals: {}, cocktails: {} };

    const isTheRecipeInProgress = Object.keys(
      inicialProgress[typeOfRecipe],
    ).includes(id);

    const progressValues = Object.values(inicialProgress);

    if (isTheRecipeInProgress) {
      const prevIngredients = inicialProgress[typeOfRecipe][id] || [];

      const ingredientsToInclude = [
        ...prevIngredients,
        input,
      ];

      const newProgress = {
        ...inicialProgress,
        [typeOfRecipe]: {
          ...inicialProgress[typeOfRecipe],
          ...progressValues[typeOfRecipe],
          [id]: ingredientsToInclude,
        },
      };

      window.localStorage.setItem(
        'inProgressRecipes', JSON.stringify(newProgress),
      );
    } else {
      const newProgress = {
        ...inicialProgress,
        [typeOfRecipe]: {
          ...inicialProgress[typeOfRecipe],
          ...progressValues[typeOfRecipe],
          [id]: [input],
        },
      };

      window.localStorage.setItem(
        'inProgressRecipes', JSON.stringify(newProgress),
      );
    }
  };

  const handleLineThrough = (
    { checked, checkedInputs, checkedState, setChecked },
    { setCheckedInputs, input, typeOfRecipe, id },
  ) => {
    setChecked(!checkedState);
    if (checked) {
      setCheckedInputs([...checkedInputs, input]);
      handleAddToLocalStorage(typeOfRecipe, id, input);
    } else {
      handleDeleteFromLocalStorage(typeOfRecipe, id, input);
      setCheckedInputs(checkedInputs.filter((checkedInput) => (
        checkedInput !== input
      )));
    }
  };

  const providerValue = {
    handleLineThrough,
  };

  return (
    <SPContext.Provider value={ providerValue }>
      {children}
    </SPContext.Provider>
  );
}

SPProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
