import React from 'react';
import { Switch, Route } from 'react-router';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
      </Switch>
    </AppProvider>
  );
}

export default App;
