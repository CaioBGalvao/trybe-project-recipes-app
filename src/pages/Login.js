import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';

export default function Login({ history }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const MIN_PASSWORD_LENGTH = 6;
    if (
      emailInput.includes('@')
      && emailInput.includes('.com')
      && passwordInput.length > MIN_PASSWORD_LENGTH
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailInput, passwordInput]);

  const handleButtonClick = () => {
    const FIXED_TOKEN = '1';
    const userObject = { email: emailInput };

    localStorage.setItem('mealsToken', FIXED_TOKEN);
    localStorage.setItem('cocktailsToken', FIXED_TOKEN);
    localStorage.setItem('user', JSON.stringify(userObject));

    history.push('/foods');
  };

  return (
    <main className="login__main">
      <div className="login__form">
        <div className="login__logo__container">
          <h1 className="login__logo">Recipe App</h1>
        </div>

        <form className="login__forms">
          <div className="login__div">
            <h2 className="login__h2">Login</h2>
            <p className="login__p">your next meal, one click away!</p>
          </div>

          <input
            className="login__input"
            data-testid="email-input"
            placeholder="name@email.com"
            onChange={ ({ target: { value } }) => setEmailInput(value) }
          />
          <input
            className="login__input"
            type="password"
            data-testid="password-input"
            placeholder="password"
            onChange={ ({ target: { value } }) => setPasswordInput(value) }
          />
          <button
            className="login__button"
            type="button"
            onClick={ handleButtonClick }
            data-testid="login-submit-btn"
            disabled={ disabled }
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;
