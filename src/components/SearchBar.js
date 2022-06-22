import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';

function SearchBar({ myRoute }) {
  const {
    revenuesSearch,
    ingredientRadio,
    nameRadio,
    firstLetterRadio,
    setRevenuesSearch,
    setIngredientRadio,
    setNameRadio,
    setFirstLetterRadio,
    setMyRoute,
    fetchApi,
  } = useContext(RevenuesContext);
  return (
    <form>
      <label htmlFor="revenues-search">
        <input
          data-testid="search-input"
          type="search"
          id="revenues-search"
          name="revenuesSerch"
          value={ revenuesSearch }
          onChange={ ({ target: { value } }) => setRevenuesSearch(value) }
        />
      </label>
      <label htmlFor="ingredient-radio">
        Ingredient
        <input
          type="radio"
          id="ingredient-radio"
          name="ingredient"
          value={ ingredientRadio }
          onChange={ () => setIngredientRadio(!ingredientRadio) }
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-radio">
        Name
        <input
          type="radio"
          id="name-radio"
          name="name"
          value={ nameRadio }
          onChange={ () => setNameRadio(!nameRadio) }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-radio">
        First Letter
        <input
          type="radio"
          id="first-letter-radio"
          name="firstLetter"
          value={ firstLetterRadio }
          onChange={ () => {
            setFirstLetterRadio(!firstLetterRadio);
            setMyRoute(myRoute);
          } }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ fetchApi }
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
