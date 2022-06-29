import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import appContext from '../MyContext/appContext';

import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import SP1 from '../components/superComponents/SP1';

export default function DrinksInProgress() {
  const { handleFavoriteButton, handleDoneRecipeButton } = useContext(appContext);
  const { id } = useParams();

  const [apiResults, setApiResults] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [inputsToHandle, setInputsToHandle] = useState([]);
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [checkedInputs, setCheckedInputs] = useState([]);

  useEffect(() => {
    const handleSetDrinkResult = async () => {
      const DRINK_ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

      const response = await fetch(DRINK_ENDPOINT);
      const { drinks } = await response.json();

      setApiResults(drinks[0]);
    };

    handleSetDrinkResult();
  }, [id]);

  useEffect(() => {
    const inputs = [
      apiResults.strIngredient1,
      apiResults.strIngredient2,
      apiResults.strIngredient3,
      apiResults.strIngredient4,
      apiResults.strIngredient5,
      apiResults.strIngredient6,
      apiResults.strIngredient7,
      apiResults.strIngredient8,
      apiResults.strIngredient9,
      apiResults.strIngredient10,
      apiResults.strIngredient11,
      apiResults.strIngredient12,
      apiResults.strIngredient13,
      apiResults.strIngredient14,
      apiResults.strIngredient15,
    ];

    setInputsToHandle(inputs);
  }, [apiResults]);

  const handleShareButton = () => {
    const THREE_SECONDS = 3000;
    const URL_TO_COPY = `http://localhost:3000/drinks/${id}`;

    navigator.clipboard.writeText(URL_TO_COPY);
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), THREE_SECONDS);
  };

  useEffect(() => {
    const favoriteRecipes = JSON.parse(
      window.localStorage.getItem('favoriteRecipes'),
    ) || [];

    const isThisRecipeFavorited = favoriteRecipes.some(
      (recipe) => recipe.id === id,
    );

    if (isThisRecipeFavorited) {
      setFavoritedRecipe(true);
    } else {
      setFavoritedRecipe(false);
    }
  }, [id]);

  return (
    <div>
      <img
        width={ 100 }
        data-testid="recipe-photo"
        src={ apiResults.strDrinkThumb }
        alt={ apiResults.strDrink }
      />

      <h1 data-testid="recipe-title">
        {apiResults.strDrink}
      </h1>

      <button
        src={ shareIcon }
        type="button"
        data-testid="share-btn"
        onClick={ handleShareButton }
      >
        <img
          src={ shareIcon }
          alt="share button"
        />
      </button>
      <button
        src={ !favoritedRecipe ? whiteHeartIcon : blackHeartIcon }
        type="button"
        data-testid="favorite-btn"
        onClick={ () => handleFavoriteButton(
          setFavoritedRecipe, favoritedRecipe,
          { id, recipeResults: apiResults, typeOfRecipe: 'drink' },
        ) }
      >
        <img
          src={ !favoritedRecipe ? whiteHeartIcon : blackHeartIcon }
          alt="favorite button"
        />
      </button>

      <h2 data-testid="recipe-category">
        {apiResults.strCategory}
      </h2>

      {showMessage && <p>Link copied!</p>}

      { inputsToHandle
  && inputsToHandle.map((input, index) => (
    <SP1
      key={ index }
      input={ input }
      index={ index }
      id={ id }
      typeOfRecipe="cocktails"
      setDisabled={ setDisabled }
      inputsToHandle={ inputsToHandle }
      inputs={ { checkedInputs, setCheckedInputs } }
    />
  )) }

      <p data-testid="instructions">
        {apiResults.strInstructions}
      </p>

      <Link to="/done-recipes">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ disabled }
          onClick={ () => handleDoneRecipeButton(
            { id,
              type: 'drink',
              nationality: apiResults.strArea,
              category: apiResults.strCategory,
              alcoholicOrNot: apiResults.strAlcoholic,
              name: apiResults.strDrink,
              image: apiResults.strDrinkThumb,
              tags: [],
            },
          ) }
        >
          Finish Recipe
        </button>
      </Link>

    </div>
  );
}
