import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ChangingButton({
  showButton,
  setShowButton,
  id,
}) {
  const { location: { pathname } } = useHistory();
  const atualRecipeType = pathname.split('/')[1] || '/foods';

  const [btnText, setBtnText] = useState('Start Recipe');

  useEffect(() => {
    const doneRecipes = JSON.parse(window.localStorage.getItem('doneRecipes')) || [];
    const inProgressRecipes = JSON.parse(window.localStorage.getItem(
      'inProgressRecipes',
    )) || { meals: {}, cocktails: {} };

    const inProgressValues = Object.values(inProgressRecipes);
    const isThisRecipeInProgress = inProgressValues.some((recipe) => (
      Object.keys(recipe).includes(id)
    ));

    if (isThisRecipeInProgress) {
      setBtnText('Continue Recipe');
    } else {
      setBtnText('Start Recipe');
    }

    const isThisRecipeAlreadyDone = doneRecipes.some(
      (recipe) => recipe.id === id,
    );

    if (isThisRecipeAlreadyDone) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  },
  [btnText, setBtnText, atualRecipeType, id, setShowButton]);

  return (
    <div>
      { showButton && (
        <button
          style={ { position: 'fixed', bottom: 0 } }
          type="button"
          data-testid="start-recipe-btn"
        >
          {btnText}
        </button>
      ) }

    </div>
  );
}

ChangingButton.propTypes = {
  showButton: PropTypes.bool,
  setShowButton: PropTypes.func,
  btnText: PropTypes.string,
  setBtnText: PropTypes.func,
  id: PropTypes.string,
}.isRequired;
