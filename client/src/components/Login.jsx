import React, { Component } from 'react';
import styled from 'styled-components';
import history from './history';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loginError: false,
      registerError: false,
    }
    this.logIn = this.logIn.bind(this);
    this.register = this.signUp.bind(this);
  }

  logIn() {
    const { username, password } = this.state;
    const { loginHandler } = this.props;
    axios.post('/api/login', {
      username,
      password
    })
    .then((response) => {
      const { isValid, id } = response.data;
      if (isValid) {
        loginHandler(id);
      } else {
        this.setState({
          loginError: true
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  register() {
    const { username, password } = this.state;

    axios.post('/api/register', {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        this.state.signUpError = false;
      } else {
        this.setState({
          signUpError: true
        }, () => this.state.signUpError = false)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { logIn, signUp, loggedIn } = this.props;
    const { loginError, signUpError } = this.state;
    return (
      <Form>
        <div>
          <label>Username:</label>
          <input type="test" name="username" placeholder="Username" />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <br />
        <div>
          <input type="submit" value="Log-in" /> <br />
          <input type="submit" value="Sign-up" />
        </div>
      </Form>
    );
  }

}