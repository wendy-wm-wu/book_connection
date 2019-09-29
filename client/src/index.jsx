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
    }
    this.fetchBooks = this.fetchBooks.bind(this);
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
          books: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
      {/* <BooksList /> */}
      <Search />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));