import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function Login() {
  const {
    setInputEmail,
    setInputPassword,
    inputEmail,
    inputPassword,
  } = useContext(AppContext);

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
      >
        Enter
      </button>
    </>

  );
}
