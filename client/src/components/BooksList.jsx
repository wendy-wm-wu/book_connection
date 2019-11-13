import React from 'react';
import Book from './Book.jsx';

const BooksList = (props) => {
  return (
    <div className="books-list">
      {props.books.map((book, index) => {
        if (book.volumeInfo.imageLinks !== undefined) {
          return <Book book={book} index={index} title={book.volumeInfo.title} author={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.smallThumbnail} />
        }
      })}
    </div>
  );
}


export default BooksList;

