import React from 'react';
import Book from './Book.jsx';
import { CardDeck } from 'react-bootstrap';

const BooksList = (props) => {
  const { books, saveBook } = props;
  return (
    <div className="books-list">
      <CardDeck>
      { books.map((book, index) => {
        if (book.volumeInfo.imageLinks !== undefined) {
          return <Book book={book} key={index} title={book.volumeInfo.title} author={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.smallThumbnail} saveBook={saveBook} />
        }
      })}
      </CardDeck>
    </div>
  );
}


export default BooksList;

