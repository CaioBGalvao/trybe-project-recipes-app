import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SPContext from '../../MyContext/SPContext';

export default function SP1(
  { input, index, id, typeOfRecipe, setDisabled, inputsToHandle, inputs },
) {
  const [checkedState, setChecked] = useState(false);

  const { handleLineThrough } = useContext(SPContext);
  const { checkedInputs, setCheckedInputs } = inputs;

  useEffect(() => {
    const inicialProgress = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    ) || { meals: {}, cocktails: {} };

    const recipeValues = Object.values(
      inicialProgress[typeOfRecipe],
    ).some((recipe) => recipe.includes(input));

    if (recipeValues) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [id, typeOfRecipe, input]);

  useEffect(() => {
    const filteredInputs = inputsToHandle.filter((e) => e !== null && e !== '');
    if (checkedInputs.length >= filteredInputs.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputsToHandle, checkedInputs, setDisabled]);

  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>

      {
        input && (
          <label
            key={ input }
            htmlFor={ `ingredient-${index}` }
            data-testid={ `${index}-ingredient-step` }
            style={
              checkedState ? { textDecorationLine: 'line-through' }
                : { textDecorationLine: 'none' }
            }
          >
            {input || ''}
            <input
              type="checkbox"
              id={ `ingredient-${index}` }
              name={ input }
              onChange={ ({ target: { checked } }) => handleLineThrough(
                { checked, checkedInputs, checkedState, setChecked },
                { setCheckedInputs, input, typeOfRecipe, id },
              ) }
              checked={ checkedState }
            />
          </label>
        )
      }
    </div>
  );
}

SP1.propTypes = {
  inputsToHandle: PropTypes.array,
}.isRequired;
