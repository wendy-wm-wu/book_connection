import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

  render() {
    const { bookQuery, fetchEvents } = this.props;
    const { input, city } = this.state;
    return (
      <div>
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
