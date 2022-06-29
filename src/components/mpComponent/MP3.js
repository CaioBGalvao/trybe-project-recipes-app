import React from 'react';
import PropTypes from 'prop-types';

export default function MP3({ apiResults }) {
  return (
    <div>
      <p data-testid="11-ingredient-name-and-measure">
        {`${apiResults.strIngredient12 || ''} ${apiResults.strMeasure12 || ''}`}
      </p>
      <p data-testid="12-ingredient-name-and-measure">
        {`${apiResults.strIngredient13 || ''} ${apiResults.strMeasure13 || ''}`}
      </p>
      <p data-testid="13-ingredient-name-and-measure">
        {`${apiResults.strIngredient14 || ''} ${apiResults.strMeasure14 || ''}`}
      </p>
      <p data-testid="14-ingredient-name-and-measure">
        {`${apiResults.strIngredient15 || ''} ${apiResults.strMeasure15 || ''}`}
      </p>
    </div>
  );
}

MP3.propTypes = {
  apiResults: PropTypes.object,
}.isRequired;
