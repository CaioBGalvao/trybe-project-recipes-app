import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const clearUser = () => {
    window.localStorage.clear();
    history.push('/');
  };

  const { email } = JSON.parse(window.localStorage.getItem('user'));

  return (
    <div>
      <Header title="Profile" btnSearch />
      <h3 data-testid="profile-email">{ email }</h3>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes

        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes

        </button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ clearUser }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;

// Falta
// - Limpa todas as chaves da localStorage;
// - O e-mail armazenado em localStorage está visível.
