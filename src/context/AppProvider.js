import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import RevenuesProvider from './RevenuesProvider';

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
    <AppContext.Provider value={ contextValue }>
      <RevenuesProvider>
        {children}
      </RevenuesProvider>
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
