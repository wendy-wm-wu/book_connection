import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background: #e8f4f8 ;
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

const Logo = styled.img`
  position: inline-block;
  top: 0%;
  height: 70px;
  padding: 2px;
  margin: 5px;
`;

const NavBar = () => {

  const [ user, setUser ] = useState('');
  const navStyle = {
    color: '#002366',
    fontWeight: 'bold',
    textDecoration: 'none',
  }

  const getLoggedInUser = () => {
    axios.get('/api/session')
    .then((res) => {
      setUser(res.data.username);
    });
  };
  
  useEffect(() => {
    getLoggedInUser();
  });

  return (
    <Nav>
      <Logo src={`https://photogalleryproject.s3.us-east-2.amazonaws.com/bookconnectionlogo.png`} />
      <List>
        <Link style={navStyle} to="/" >
          <li>Home</li>
        </Link> 
        <Link style={navStyle} to="/events">
          <li>Events</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>Log-in</li>
        </Link>
        <Link style={navStyle} to="/signup">
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