import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import BooksRead from './components/BooksRead.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      bookCovers: {},
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/books', 
      type: 'GET',
      success: (data) => {
        console.log('successful client call', data);
        this.setState({
          books: data
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
      <BooksRead books={this.state.books}/>
      <Search books={this.state.books}/>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));