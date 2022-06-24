import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div>
      <Header title="Profile" btnSearch />
      <h3 data-testid="profile-email">Email do Usuário</h3>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes

        </button>
      </Link>
      <Link to="/favorites-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes

        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;

// Falta
// - Limpa todas as chaves da localStorage;
// - O e-mail armazenado em localStorage está visível.
