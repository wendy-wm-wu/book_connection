import React from 'react';
import Book from './Book.jsx';

const BooksList = (props) => {
  return (
    <div className="books-list">
      {props.books.map((book, index) => {
        return <Book book={book} index={index} title={book.title} author={book.author} description={book.description} image={book.image} />
      })}
    </div>
  );
}


export default BooksList;

