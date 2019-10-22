import React, { Component } from 'react';
import history from './history';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  font-family: 'Montserrat';
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    }
   this.handleChange = this.handleChange.bind(this);
   this.login = this.login.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login(e) {
    e.preventDefault();
    const { username, password } = this.state;
    axios.post('/api/login', {
      username,
      password
    })
    .then((response) => {
      if (response.data === 'success') {
        history.push('./user');
      } else {
        this.setState({
          error: true,
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    let isError;

    if (this.state.error) {
      isError = true;
    } else {
      isError = false; 
    }

    return (
      <div>
      <Form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" placeholder="Username" onChange={e => this.handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={e => this.handleChange(e)}/>
        </div>
        <br />
        <div>
          <input type="submit" value="Log-in" onClick={(e) => this.login(e)}/> <br />
          <input type="submit" value="Sign-up" />
        </div>
      </Form>
      </div>
    );
  }
}

export default Login; 