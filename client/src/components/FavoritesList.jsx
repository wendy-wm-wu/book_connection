import React from 'react';
import FavoriteBook from './FavoriteBook.jsx';

const FavoritesList = (props) => {
  const { favoriteBooks } = props;
  return (
    <div>
      { favoriteBooks.map((book, index) => {
          return <FavoriteBook book={book} key={index} title={book.title} author={book.author} description={book.description} image={book.image} />
      })}
    </div>
  );
}


export default FavoritesList;