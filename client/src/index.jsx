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
  height: 175px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  top: 8%;
  flex-wrap: wrap;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const MapWrapper = styled.div`
  position: fixed;
  margin-left: 50%;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
      venues: [],
    }
    this.fetchBooks = this.fetchBooks.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }
  
  fetchBooks() {
    $.ajax({
      url: '/api/books', 
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
      url: '/api/books',
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

  searchEvents(city) {
    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: {
        city: city,
      },
      success: (data) => {
        console.log('successfully added to database', data);
        this.fetchEvents();
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  fetchEvents(city) {
    $.ajax({
      url: '/api/events',
      type: 'GET',
      success: (data) => {
        console.log(data);
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
      <ContainerWrapper>
      <Wrapper>
      <Search onSearch={this.searchBooks} onSearchEvents={this.searchEvents}/>
      <br/>
      <BooksList books={this.state.newBooks} />
      </Wrapper>
      <MapWrapper>
      <Map />
      </MapWrapper>
      </ContainerWrapper>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));