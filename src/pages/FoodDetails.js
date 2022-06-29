import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import appContext from '../MyContext/appContext';

import MP1 from '../components/mpComponent/MP1';
import MP2 from '../components/mpComponent/MP2';
import MP3 from '../components/mpComponent/MP3';

import Recomendations from '../components/Recomendations';
import ChangingButton from '../components/ChangingButton';

import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FoodDetails() {
  const { id } = useParams();
  const { handleFavoriteButton } = useContext(appContext);

  const [apiResults, setApiResults] = useState({ strYoutube: '' });
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);

  useEffect(() => {
    const handleApiFetch = async () => {
      const MEALS_ENDPOINT = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      const response = await fetch(MEALS_ENDPOINT);
      const { meals } = await response.json();
      setApiResults(meals[0]);
    };

    handleApiFetch();
  }, [id]);

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

  const finalUrl = apiResults.strYoutube.split('=')[1];
  const videoTag = `https://www.youtube.com/embed/${finalUrl}`;

  const handleShareButton = () => {
    const THREE_SECONDS = 3000;
    const URL_TO_COPY = `http://localhost:3000/foods/${id}`;

    navigator.clipboard.writeText(URL_TO_COPY);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), THREE_SECONDS);
  };

  return (
    apiResults !== { strYoutube: '' } ? (
      <div style={ { margin: '20px 10px ' } }>
        <img
          width={ 100 }
          src={ apiResults.strMealThumb }
          alt={ apiResults.strMeal }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          {apiResults.strMeal}
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
            { id, recipeResults: apiResults, typeOfRecipe: 'food' },
          ) }
        >
          <img
            src={ !favoritedRecipe ? whiteHeartIcon : blackHeartIcon }
            alt="favorite button"
          />
        </button>

        {showMessage && <p>Link copied!</p>}

        <h2 data-testid="recipe-category">
          {apiResults.strCategory}
        </h2>

        <MP1 apiResults={ apiResults } />
        <MP2 apiResults={ apiResults } />
        <MP3 apiResults={ apiResults } />

        <p data-testid="instructions">
          {apiResults.strInstructions}
        </p>

        <iframe
          data-testid="video"
          src={ videoTag }
          title="description"
        />

        <Recomendations typeOfRecipe="foods" />
        <Link to={ `/foods/${id}/in-progress` }>
          <ChangingButton
            id={ id }
            showButton={ showButton }
            setShowButton={ setShowButton }
          />

        </Link>
      </div>
    ) : (
      <p>loading...</p>
    )
  );
}
