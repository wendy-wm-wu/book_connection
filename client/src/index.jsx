import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import BooksList from './components/BooksList.jsx';
import Map from './components/MapContainer.jsx';
import styled from 'styled-components';

const Logo = styled.img`
  position: in-line block;
  top: 0%;
  left: 10%;
  height: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 8%;
`;

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
      <Logo src={`https://photogalleryproject.s3.us-east-2.amazonaws.com/BookConnectionLogo.png`} />
      <Map />
      <Wrapper>
      <Search onSearch={this.searchBooks} />
      <br/>
      <BooksList books={this.state.newBooks} />
      </Wrapper>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));