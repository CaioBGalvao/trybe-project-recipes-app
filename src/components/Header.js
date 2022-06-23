import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title/* , btnSearch  */ }) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <>
      <Link to="/profile">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>

      <h1 data-testid="page-title">
        {title}
      </h1>

      <button
        type="button"
        datatest-id="search-top-btn"
        onClick={ () => {
          if (renderSearchBar === false) {
            setRenderSearchBar(true);
          } else {
            setRenderSearchBar(false);
          }
        } }
      >
        <img
          src={ searchIcon }
          alt="Profile"
        />
      </button>
      {/* Esperando a mentoria */}
      {/* { !btnSearch ? (
        <button
          type="button"
          onClick={ () => { setRenderSearchBar(!renderSearchBar); } }
        >
          <img
            src={ searchIcon }
            alt="Profile"
            data-testid="search-top-btn"
          />
        </button>
      ) : null} */}

      {renderSearchBar === true
        && <SearchBar pathname={ pathname } />}
    </>

  );
}

Header.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }),
  title: PropTypes.string.isRequired,
  // btnSearch: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  history: null,
};
