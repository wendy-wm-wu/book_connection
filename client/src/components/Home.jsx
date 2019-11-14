import React, { Component } from 'react';
import Search from './Search.jsx';
import { Container, Row } from 'react-bootstrap';
import BooksList from './BooksList.jsx';
import axios from 'axios';
import FavoritesList from './FavoritesList.jsx';

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '560px auto',
  gridTemplateAreas: `
                    'header header'
                    'main aside'
                    'footer footer'
                    `,
};
const headerStyle = { gridArea: 'header' };
const mainStyle = { gridArea: 'main' };
const asideStyle = {
  gridArea: 'aside', position: 'fixed', top: '10px', left: '580px',
};
const footerStyle = { gridArea: 'footer' };


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
      favoritesList: [],
    }
    this.bookQuery = this.bookQuery.bind(this);
    this.fetchFavoriteBooks = this.fetchFavoriteBooks.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  componentDidMount() {
    this.fetchFavoriteBooks();
  }

  fetchFavoriteBooks() {
    axios.get('/api/books')
      .then((res) => {
        this.setState({
          favoritesList: res.data.rows,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  bookQuery(query) {
    axios.get(`/api/books/${query}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  saveBook(book) {
    axios.post('/api/books', {book})
      .then((res) => {
        console.log('success on client',res);
      })
      .catch((err) => {
        console.log('failure on client',err);
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
    console.log(this.state.favoritesList);
    return (
      <Container style={wrapperStyle}>
        <header style={headerStyle} />
        <section style={mainStyle}>
           <BooksList books={this.state.books} saveBook={this.saveBook} />
           <FavoritesList favoriteBooks={this.state.favoritesList}/>
        </section>
      <Search bookQuery={this.bookQuery} />
      </Container>
    );
  }
}

export default Home; 

