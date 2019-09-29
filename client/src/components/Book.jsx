import React from 'react';
import styled from 'styled-components';

const Rank = styled.div`
  margin: 30px 0px;
  padding: 20px 50px;
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);

  &:before {
    content: attr(nyt-rank);
    font-family: 'Rozha One', serif;
    font-size: 3rem;
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding: 20px 20px;
    text-align: center;
    -webkit-transform: translate(-100px);
            transform: translate(-100px);
    border: 4px solid #282c37;
    background-color: #fff;
    border-radius: 50%;
    color: #282c37;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
  }
`;



const Book = (props) => {
  return (
    <div>
      <Rank>{props.rank}</Rank>
      <p><img className={`cover ${props.rank}`} id="cover" src={`${props.image}`} /></p>
      <h4>By {props.author}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default Book;
