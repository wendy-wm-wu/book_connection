import React, { Component } from 'react';
import Search from './Search.jsx';
import BooksList from './BooksList.jsx';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
    }
    this.bookQuery = this.bookQuery.bind(this);
  }

  // componentDidMount() {
  //   this.fetchBooks();
  // }
  
  bookQuery(query) {
    axios.get(`/api/books/${query}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };


  // searchBooks(searchedTerm) {
  //   $.ajax({
  //     url: '/api/books',
  //     type: 'POST',
  //     data: {
  //       title: searchedTerm,
  //     },
  //     success: (data) => {
  //       console.log('successfully added to database', data);
  //       this.fetchBooks();
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
      <div>
        <br />
      <Search bookQuery={this.bookQuery} />
      <br/>
      <BooksList books={this.state.newBooks} />
    </div>
    );
  }
}

export default Home; 

