import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      city: '',
    }
  }

  render() {
    const { bookQuery, fetchEvents } = this.props;
    const { input, city } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <input type="text" 
               placeholder="Search books..." 
               onChange={(e) => { this.setState({ input : e.target.value}); }}
        />
        <Button variant="primary" onClick={() => bookQuery(input)}>Search Books</Button>
        <input type="text" 
               placeholder="Search events near you"
               onChange={(e) => { this.setState({ city: e.target.value}); }}
        />   
        <Button variant="primary" onClick={() => fetchEvents(city)}>Search Events</Button>
      </div>
    );
  }
}

export default Search;
