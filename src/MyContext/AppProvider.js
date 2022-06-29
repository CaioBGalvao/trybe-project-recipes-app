import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

const FIRST_LETTER = 'first letter';

function AppProvider({ children }) {
  const [inputQuery, setInputQuery] = useState('');
  const [apiResults, setApiResults] = useState([]);

  const handleDoneRecipeButton = (
    { id, type, nationality,
      category, alcoholicOrNot, name,
      image, tags },
  ) => {
    const date = new Date();

    const doneRecipeInfo = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
      doneDate: date,
      tags,
    };

    const prevLocalStorage = JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) || [];

    const newLocalStorage = [
      ...prevLocalStorage,
      doneRecipeInfo,
    ];

    localStorage.setItem('doneRecipes', JSON.stringify(newLocalStorage));
  };

  const handleFavoriteButton = (
    setFavoritedRecipe, favoritedRecipe,
    { id, recipeResults, typeOfRecipe },
  ) => {
    setFavoritedRecipe(!favoritedRecipe);

    const recipeToFavorite = {
      id,
      type: typeOfRecipe,
      nationality: recipeResults.strArea || '',
      category: recipeResults.strCategory || '',
      alcoholicOrNot: recipeResults.strAlcoholic || '',
      name: recipeResults.strMeal || recipeResults.strDrink,
      image: recipeResults.strMealThumb || recipeResults.strDrinkThumb,
    };

    const prevLocalStorage = JSON.parse(
      window.localStorage.getItem('favoriteRecipes'),
    ) || [];

    if (!favoritedRecipe) {
      const allFavoritedRecipes = [
        ...prevLocalStorage,
        recipeToFavorite,
      ];

      window.localStorage.setItem('favoriteRecipes', JSON.stringify(allFavoritedRecipes));
    } else {
      const favRecipesWithoutThisRecipe = prevLocalStorage.filter(
        (recipe) => recipe.id !== id,
      );

      window.localStorage.setItem(
        'favoriteRecipes', JSON.stringify(favRecipesWithoutThisRecipe),
      );
    }
  };

  const handleFavoriteButtonFromFavoritePage = (
    setFavoritedRecipe, favoritedRecipe, recipe,
  ) => {
    setFavoritedRecipe(!favoritedRecipe);

    const recipeToFavorite = {
      id: recipe.id,
      type: recipe.type,
      nationality: recipe.nationality || '',
      category: recipe.category || '',
      alcoholicOrNot: recipe.alcoholicOrNot || '',
      name: recipe.name || '',
      image: recipe.image || '',
    };

    const prevLocalStorage = JSON.parse(
      window.localStorage.getItem('favoriteRecipes'),
    ) || [];

    if (!favoritedRecipe) {
      const allFavoritedRecipes = [
        ...prevLocalStorage,
        recipeToFavorite,
      ];

      window.localStorage.setItem('favoriteRecipes', JSON.stringify(allFavoritedRecipes));
    } else {
      const favRecipesWithoutThisRecipe = prevLocalStorage.filter(
        (recipeLocal) => recipeLocal.id !== recipe.id,
      );

      window.localStorage.setItem(
        'favoriteRecipes', JSON.stringify(favRecipesWithoutThisRecipe),
      );
    }
  };

  const handleMealsApiQuery = async (typeOfRadioToQuery, showIngredients) => {
    if (showIngredients && showIngredients.length > 0) {
      const query = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${showIngredients}`;
      const response = await fetch(query);
      const { meals } = await response.json();

      setApiResults(meals);
      return;
    }

    let query = '';

    switch (typeOfRadioToQuery) {
    case 'ingredient':
      query = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputQuery}`;

      break;
    case 'name':
      query = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputQuery}`;

      break;
    case FIRST_LETTER:
      query = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputQuery}`;
      break;
    default:
      query = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    }

    if (typeOfRadioToQuery === FIRST_LETTER
    && inputQuery.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      if (inputQuery.length === 0) {
        global.alert('Your search must have more than 0 (zero) characters');
        return;
      }

      const response = await fetch(query);
      const { meals } = await response.json();

      if (!meals) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        setApiResults([]);
      } else {
        setApiResults(meals);
      }
    }
  };

  const handleDrinksApiQuery = async (typeOfRadioToQuery, showIngredients) => {
    if (showIngredients && showIngredients.length > 0) {
      const query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${showIngredients}`;
      const response = await fetch(query);
      const { drinks } = await response.json();

      setApiResults(drinks);
      return;
    }

    let query = '';

    switch (typeOfRadioToQuery) {
    case 'ingredient':
      query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputQuery}`;

      break;
    case 'name':
      query = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputQuery}`;

      break;
    case FIRST_LETTER:
      query = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputQuery}`;
      break;
    default:
      query = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    }

    if (typeOfRadioToQuery === FIRST_LETTER
&& inputQuery.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      if (inputQuery.length === 0) {
        global.alert('Your search must have more than 0 (zero) characters');
        return;
      }

      const response = await fetch(query);
      const { drinks } = await response.json();

      if (!drinks) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        setApiResults([]);
      } else {
        setApiResults(drinks);
      }
    }
  };

  const handleApiQuery = (pathname, typeOfRadioToQuery) => {
    if (pathname.includes('foods')) {
      handleMealsApiQuery(typeOfRadioToQuery);
    } else {
      handleDrinksApiQuery(typeOfRadioToQuery);
    }
  };

  const providerValue = {
    apiResults,
    inputQuery,
    setInputQuery,
    handleApiQuery,
    handleMealsApiQuery,
    handleDrinksApiQuery,
    handleFavoriteButton,
    handleDoneRecipeButton,
    handleFavoriteButtonFromFavoritePage,
  };

  return (
    <AppContext.Provider value={ providerValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
