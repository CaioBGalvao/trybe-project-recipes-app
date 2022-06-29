import React from 'react';
import PropTypes from 'prop-types';

export default function DoneButtons({ setFilter }) {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('') }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('Food') }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('Drinks') }
      >
        Drinks
      </button>

    </div>
  );
}

DoneButtons.propTypes = {
  setFilter: PropTypes.func,
}.isRequired;
