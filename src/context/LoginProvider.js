import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';
import AppProvider from '../MyContext/AppProvider';
import SPProvider from '../MyContext/SPProvider';

function Provider({ children }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const contextValue = {
    inputEmail,
    setInputEmail,
    inputPassword,
    setInputPassword,
  };

  return (
    <SPProvider>
      <AppProvider>
        <LoginContext.Provider value={ contextValue }>
          {children}
        </LoginContext.Provider>
      </AppProvider>
    </SPProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
