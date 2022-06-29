import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function DoneComponent({ index, recipe }) {
  const [showMessage, setShowMessage] = useState(false);

  const typeOfRecipe = recipe.type === 'food' ? 'foods' : 'drinks';

  const handleShareButton = () => {
    const THREE_SECONDS = 3000;
    const URL_TO_COPY = `http://localhost:3000/${typeOfRecipe}/${recipe.id}`;

    navigator.clipboard.writeText(URL_TO_COPY);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), THREE_SECONDS);
  };

  return (
    <div>
      <Link to={ `/${typeOfRecipe}/${recipe.id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
          width={ 100 }
        />

        <p data-testid={ `${index}-horizontal-name` }>
          {recipe.name}
        </p>
      </Link>

      <p data-testid={ `${index}-horizontal-top-text` }>
        {recipe.alcoholicOrNot
         || `${recipe.nationality} - ${recipe.category}`}
      </p>

      <p data-testid={ `${index}-horizontal-done-date` }>
        {recipe.doneDate}
      </p>

      <button
        src={ shareIcon }
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ handleShareButton }
      >
        <img
          src={ shareIcon }
          alt="share button"
        />
      </button>

      {showMessage && <p>Link copied!</p>}

      {recipe.tags.map((tag) => (
        <p
          key={ tag }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </p>
      ))}
    </div>
  );
}

DoneComponent.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.object,
}.isRequired;
