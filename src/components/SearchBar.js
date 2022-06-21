import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function SearchBar({ myRoute }) {
  const {
    revenuesSearch,
    ingredientRadio,
    nameRadio,
    firstLetterRadio,
  } = useContext(AppContext);
  return (
    <form>
      <label htmlFor="revenues-search">
        <input
          type="search"
          id="revenues-search"
          name="revenuesSerch"
          value={ revenuesSearch }
          onChange={ ({ target: { value } }) => setRevenuesSearch(value) }
        />
      </label>
      <label htmlFor="ingredient-radio">
        <input
          type="radio"
          id="ingredient-radio"
          name="ingredient"
          value={ ingredientRadio }
          onChange={ ({ target: { value } }) => setIngredientRadio(value) }
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-radio">
        <input
          type="radio"
          id="name-radio"
          name="name"
          value={ nameRadio }
          onChange={ ({ target: { value } }) => setNameRadio(value) }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-radio">
        <input
          type="radio"
          id="first-letter-radio"
          name="firstLetter"
          value={ firstLetterRadio }
          onChange={ ({ target: { value } }) => {
            setFirstLetterRadio(value);
            setMyRoute(myRoute);
          } }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search

      </button>
    </form>
  );
}

SearchBar.propTypes = {
  myRoute: PropTypes.string.isRequired,
};

export default SearchBar;
