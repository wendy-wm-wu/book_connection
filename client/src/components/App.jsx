import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Events from './Events.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Signup from './Signup.jsx';
import history from './history';

export default function App() {
  return (
    <Router history = {history}>
      <div>
        <NavBar />
        <Switch>
          {/* <Route path = '/' exact component = { Home } /> */}
          <Route path = '/events' component = { Events } />
          <Route path = '/login' component = { Login } />
          <Route path = '/signup' component = { Signup } />
          <Route path = '/logout' component = { Logout } />
        </Switch>
      </div>
    </Router>
    );
};
