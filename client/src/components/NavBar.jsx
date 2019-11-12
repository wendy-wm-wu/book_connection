import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background: #85BDBF;
  font-family: sans-serif;
  color: white;
  z-index: 2;
`;

const List = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const NavBar = () => {

  const [ user, setUser ] = useState('');
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  }

  // const getLoggedInUser = () => {

  // }

  return (
    <Nav>
      <h3>Book Connection</h3>
      <List>
        <Link style={navStyle} to="/" >
          <li>Home</li>
        </Link> 
        <Link style={navStyle} to="/login">
          <li>Log-in</li>
        </Link>
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
        <Link style={navStyle} to="/logout">
          <li>Log-out</li>
        </Link>
      </List>
    </Nav>
  );
}

export default NavBar;