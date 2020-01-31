import React from 'react';
import FavoriteBook from './FavoriteBook.jsx';

const FavoritesList = ({ favoriteBooks, readBook }) => {
  return (
    <div>
      { favoriteBooks.map((book, index) => {
          return <FavoriteBook book={book} key={book.id} title={book.title} author={book.author} description={book.description} image={book.image} readBook={readBook} />
      })}
    </div>
  );
}


export default FavoritesList;