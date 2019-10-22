import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import BooksList from './BooksList.jsx';
import EventsList from './EventsList.jsx';
import MapContainer from './MapContainer.jsx';
import styled from 'styled-components';

const Logo = styled.img`
  position: in-line block;
  top: 0%;
  left: 20%;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  top: 15%;
  flex-wrap: no wrap;
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 2%;
  left: 40%;
  z-index: 99;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 53%;
  margin-left: 2%;
`;

const MapWrapper = styled.div`
  position: fixed;
  margin-left: 53%;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  flex-wrap: wrap;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      newBooks: [],
      venues: [],
      events: [],
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
        this.setState({
          events: data,
        });
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
        this.setState({
          venues: data,
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render () {
    return (
      <div>
      <Logo src={`https://photogalleryproject.s3.us-east-2.amazonaws.com/bookconnectionlogo.png`} />
      <hr style={{ height: 0.5}}/>
      <br />
        <SearchWrapper>
      <Search onSearch={this.searchBooks} onSearchEvents={this.searchEvents}/>
        </SearchWrapper>
      <ContainerWrapper>
      <Wrapper>
      <br/>
      <BooksList books={this.state.newBooks} />
      </Wrapper>
      <MapWrapper>
      <MapContainer venues={this.state.venues}/>
      </MapWrapper>
      <EventsWrapper>
      <EventsList events={this.state.events} />
      </EventsWrapper>
      </ContainerWrapper>
    </div>
    );
  }
}

