import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import User from './user.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import history from './history';

export default function App() {
  return (
    <Router history = {history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/login' component = { Login } />
          <Route path = '/signup' component = { Signup } />
          <Route path = '/user' component = { User } />
        </Switch>
      </div>
    </Router>
    );
};
