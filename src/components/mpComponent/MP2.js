import React from 'react';
import PropTypes from 'prop-types';

export default function MP2({ apiResults }) {
  return (
    <div>
      <p data-testid="6-ingredient-name-and-measure">
        {`${apiResults.strIngredient7 || ''} ${apiResults.strMeasure7 || ''}`}
      </p>
      <p data-testid="7-ingredient-name-and-measure">
        {`${apiResults.strIngredient8 || ''} ${apiResults.strMeasure8 || ''}`}
      </p>
      <p data-testid="8-ingredient-name-and-measure">
        {`${apiResults.strIngredient9 || ''} ${apiResults.strMeasure9 || ''}`}
      </p>
      <p data-testid="9-ingredient-name-and-measure">
        {`${apiResults.strIngredient10 || ''} ${apiResults.strMeasure10 || ''}`}
      </p>
      <p data-testid="10-ingredient-name-and-measure">
        {`${apiResults.strIngredient11 || ''} ${apiResults.strMeasure11 || ''}`}
      </p>
    </div>
  );
}

MP2.propTypes = {
  apiResults: PropTypes.object,
}.isRequired;
