import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  return (
    <>
      <Link to="/profile">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>

      <h1 data-testid="page-title">Title</h1>

      <Link to="/explore">
        <img src={ searchIcon } alt="Profile" data-testid="search-top-btn" />
      </Link>
    </>

  );
}
