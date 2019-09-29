import React from 'react';
import Book from './Book.jsx';

const BooksList = (props) => {
  return (
    <div className="books-list">
      {props.books.map((book, index) => {
        return <Book book={book} index={index} rank={book.rank} weeks={book.weeks_on_list} description={book.description} title={book.title} author={book.author} image={book.book_image} />
      })};
    </div>
  );
}


export default BooksList;

