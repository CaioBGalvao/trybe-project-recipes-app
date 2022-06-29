import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, pathname, btnSearch = false }) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/profile"
          className="justify-content-start"
        >
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />

        </Navbar.Brand>
        <Navbar.Text
          className="justify-content-center"

        >
          <h1
            className="fw-bold"
            data-testid="page-title"
          >
            {title}
          </h1>
        </Navbar.Text>
        {btnSearch ? (
          <Button
            className="mb-2 justify-content-end"
            type="button"
            variant="light"
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
          </Button>
        ) : null}
        
        {renderSearchBar === true
        && <SearchBar pathname={ pathname } />}
      </Container>
    </Navbar>

  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};

<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>