import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import MP1 from '../components/mpComponent/MP1';
import MP2 from '../components/mpComponent/MP2';
import MP3 from '../components/mpComponent/MP3';

import appContext from '../MyContext/appContext';

import Recomendations from '../components/Recomendations';
import ChangingButton from '../components/ChangingButton';

import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function DrinksDetails() {
  const { id } = useParams();
  const { handleFavoriteButton } = useContext(appContext);

  const [apiResults, setApiResults] = useState({ strYoutube: '' });
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);

  useEffect(() => {
    const handleApiFetch = async () => {
      const DRINK_ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

      const response = await fetch(DRINK_ENDPOINT);
      const { drinks } = await response.json();
      setApiResults(drinks[0]);
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

  const handleShareButton = () => {
    const THREE_SECONDS = 3000;
    const URL_TO_COPY = `http://localhost:3000/drinks/${id}`;

    navigator.clipboard.writeText(URL_TO_COPY);
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), THREE_SECONDS);
  };

  return (
    apiResults.length !== 0 ? (
      <div style={ { margin: '20px 10px ' } }>
        <img
          width={ 100 }
          src={ apiResults.strDrinkThumb }
          alt={ apiResults.strDrink }
          data-testid="recipe-photo"
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

        {showMessage && <p>Link copied!</p>}

        <h2 data-testid="recipe-category">
          {`${apiResults.strAlcoholic} ${apiResults.strCategory}`}
        </h2>

        <MP1 apiResults={ apiResults } />
        <MP2 apiResults={ apiResults } />
        <MP3 apiResults={ apiResults } />

        <p data-testid="instructions">
          {apiResults.strInstructions}
        </p>

        <Recomendations />
        <Link to={ `/drinks/${id}/in-progress` }>
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
