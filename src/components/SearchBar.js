import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';

function SearchBar({ pathname }) {
  const {
    requestRevenues,
  } = useContext(RevenuesContext);

  const [state, setState] = useState({
    revenuesSerch: '',
    ingredient: false,
    name: false,
    firstLetter: false,
  });

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'revenuesSerch':
      return setState({
        ...state,
        [name]: value,
      });
    case 'ingredient':
      return setState({
        ...state,
        [name]: !state[name],
        name: false,
        firstLetter: false,
      });
    case 'name':
      return setState({
        ...state,
        [name]: !state[name],
        ingredient: false,
        firstLetter: false,
      });
    case 'firstLetter':
      return setState({
        ...state,
        [name]: !state[name],
        ingredient: false,
        name: false,
      });
    default: return setState({ ...state });
    }
  };

  const { revenuesSerch, ingredient, name, firstLetter } = state;

  const endPointSelector = () => {
    if (ingredient === true) {
      return `filter.php?i=${revenuesSerch}`;
    }
    if (name === true) {
      return `search.php?s=${revenuesSerch}`;
    }
    if (firstLetter === true && revenuesSerch.length === 1) {
      return `search.php?f=${revenuesSerch}`;
    }
    if (firstLetter === true && revenuesSerch.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <form>
      <label htmlFor="revenues-search">
        <input
          data-testid="search-input"
          type="search"
          id="revenues-search"
          name="revenuesSerch"
          value={ revenuesSerch }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="ingredient-radio">
        Ingredient
        <input
          type="radio"
          id="ingredient-radio"
          name="ingredient"
          checked={ ingredient }
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-radio">
        Name
        <input
          type="radio"
          id="name-radio"
          name="name"
          checked={ name }
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-radio">
        First Letter
        <input
          type="radio"
          id="first-letter-radio"
          name="firstLetter"
          checked={ firstLetter }
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          requestRevenues(endPointSelector(), pathname);
        } }
      >
        Search

      </button>
    </form>
  );
}

SearchBar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default SearchBar;
