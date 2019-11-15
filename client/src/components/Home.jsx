import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import BooksList from './BooksList.jsx';
import axios from 'axios';
import FavoritesList from './FavoritesList.jsx';
import styled from 'styled-components';

const Input = styled.input`
  position: fixed;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  top: 11%;
  left: %;
`;

const Div = styled.div`
  margin-top: 100px;
  position: relative;
  text-align: center;
  justify-content: space-around;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
      favoritesList: [],
      input: '',
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
        console.log('success on client', res);
      })
      .catch((err) => {
        console.log('failure on client', err);
      });
  };

  render () {
    console.log(this.state.favoritesList);
    return (
      <Div>
            <input type="text" 
                  placeholder="Search books..." 
                  onChange={(e) => { this.setState({ input : e.target.value}); }}
            />
            <Button onClick={() => this.bookQuery(this.state.input)}>Search Books</Button>
            <br />
            <br />
              <FavoritesList favoriteBooks={this.state.favoritesList}/>
              <BooksList books={this.state.books} saveBook={this.saveBook} />
      </Div>
    );
  }
}

export default Home; 

