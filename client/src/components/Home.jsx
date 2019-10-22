import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  
  const StyledLink = styled(Link)`
    color: #6d6e71;
    font-weight: bold;
  `;

  const Wrapper = styled.div`
    padding: 4em;
    text-align: center;
  `;

  return(
      <Wrapper>
        <p>
          <StyledLink to="/login">Log-in</StyledLink><br /><br />
          <StyledLink to="/signup">Sign-up</StyledLink>
        </p>
      </Wrapper>
  )
}