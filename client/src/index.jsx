import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import BooksList from './components/BooksList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
    }
    this.fetchBooks = this.fetchBooks.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }
  
  fetchBooks() {
    $.ajax({
      url: '/books', 
      type: 'GET',
      success: (data) => {
        console.log('successful client call', data);
        this.setState({
          newBooks: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  searchBooks(searchedTerm) {
    $.ajax({
      url: '/books',
      type: 'POST',
      data: {
        title: searchedTerm,
      },
      success: (data) => {
        console.log('successfully added to database', data);
        this.fetchBooks();
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
      <Search onSearch={this.searchBooks} />
      <br />
      <BooksList books={this.state.newBooks} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));