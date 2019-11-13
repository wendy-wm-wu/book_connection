import React, { Component } from 'react';
import axios from 'axios';
import { Marker } from 'react-google-maps';

class EventMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: null,
    }
  }

  componentDidMount() {
    axios.get(`/api/venues/${this.props.event.venueID}`)
      .then((res) => {
        this.setState({
          venue: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      this.state.venue && 
      <Marker 
        icon={this.props.isHovered ? '': ''}
        onClick={(e) => this.props.onToggleOpen(this.props.event, e)}
        position={{
          lat: Number(this.state.venue.address.latitude),
          lng: Number(this.state.venue.address.longitude),
        }}
      />
    );
  }
}

export default EventMarker;