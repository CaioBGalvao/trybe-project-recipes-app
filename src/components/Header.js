import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, pathname, btnSearch = false }) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);
  return (
    <>
      <Link to="/profile">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>

      <h1 data-testid="page-title">
        {title}
      </h1>

      {btnSearch ? (
        <button
          type="button"
          onClick={ () => {
            if (renderSearchBar === false) {
              setRenderSearchBar(true);
            } else {
              setRenderSearchBar(false);
            }
          } }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Profile"
          />
        </button>
      ) : null}

      {renderSearchBar === true
        && <SearchBar pathname={ pathname } />}
    </>

  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};
