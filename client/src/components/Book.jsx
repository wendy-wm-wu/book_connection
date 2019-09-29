import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: #2b90d9;
  line-height: 1.4;
  font-family: 'Open Sans', sans-serif;
`;

const Author = styled.div`
  color: #282c37;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;

const Description = styled.div`
  color: #282c37;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
`;

const Image = styled.img`
  display: block;
  margin: left;
  padding: 2em;
  width: 200px;
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
  
`;

const Wrapper = styled.section`
  padding: 2em;
`;


const Book = (props) => {
  return (
    <div>
      <Image src={`${props.image}`} />
      <Wrapper>
      <Title>{props.title}</Title>
      <Author>By {props.author}</Author>
      <br/>
      <Description>{props.description}</Description>
      </Wrapper>
    </div>
  );
};

export default Book;
