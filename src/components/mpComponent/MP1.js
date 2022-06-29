import React from 'react';
import PropTypes from 'prop-types';

export default function MP1({ apiResults }) {
  return (
    <div>
      <p data-testid="0-ingredient-name-and-measure">
        {`${apiResults.strIngredient1 || ''} ${apiResults.strMeasure1 || ''}`}
      </p>
      <p data-testid="1-ingredient-name-and-measure">
        {`${apiResults.strIngredient2 || ''} ${apiResults.strMeasure2 || ''}`}
      </p>
      <p data-testid="2-ingredient-name-and-measure">
        {`${apiResults.strIngredient3 || ''} ${apiResults.strMeasure3 || ''}`}
      </p>
      <p data-testid="3-ingredient-name-and-measure">
        {`${apiResults.strIngredient4 || ''} ${apiResults.strMeasure4 || ''}`}
      </p>
      <p data-testid="4-ingredient-name-and-measure">
        {`${apiResults.strIngredient5 || ''} ${apiResults.strMeasure5 || ''}`}
      </p>
      <p data-testid="5-ingredient-name-and-measure">
        {`${apiResults.strIngredient6 || ''} ${apiResults.strMeasure6 || ''}`}
      </p>
    </div>
  );
}

MP1.propTypes = {
  apiResults: PropTypes.object,
}.isRequired;
