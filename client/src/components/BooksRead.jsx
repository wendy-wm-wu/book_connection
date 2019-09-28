import React from 'react';

const BooksRead = (props) => {
  return(
    <div>
      {props.books.map(book => { 
        return book;
      })};
    </div>
  );
}

export default BooksRead;
