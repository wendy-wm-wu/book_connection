import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import history from './history';

export default function Routes() {
  return (
    <Router history={history}>
      <Route exact path = '/' component = { App } />
      <Route path = '/login' component = { Login } />
    </Router>
    );
};
