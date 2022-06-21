import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginContext from '../context/LoginContext';

export default function Login({ history }) {
  const {
    setInputEmail,
    setInputPassword,
    inputEmail,
    inputPassword,
  } = useContext(LoginContext);

  const [isValid, setValidation] = useState(true);

  useEffect(() => {
    const NUMBER_SIX = 6;

    if (
      inputEmail.includes('@')
      && inputEmail.includes('.com')
      && inputPassword.length > NUMBER_SIX) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  }, [inputEmail, inputPassword]);

  const handleButtonClick = () => {
    const personObject = {
      email: inputEmail,
    };

    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify(personObject));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));

    history.push('/foods');
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="inputEmail">
        <input
          name="inputEmail"
          type="email"
          data-testid="email-input"
          placeholder="Ex.: ada.lovelace@betrybe.com"
          onChange={ ({ target: { value } }) => setInputEmail(value) }
        />
      </label>
      <label htmlFor="inputPassword">
        <input
          name="inputPassword"
          type="password"
          data-testid="password-input"
          placeholder="**********"
          onChange={ ({ target: { value } }) => setInputPassword(value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isValid }
        onClick={ handleButtonClick }
      >
        Enter
      </button>
    </>

  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  history: null,
};
