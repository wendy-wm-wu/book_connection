import React, { Component } from 'react';
import axios from 'axios';
import { Marker } from 'react-google-maps';

class EventMarker extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   venue: null,
    // }
  }

  // componentDidMount() {
  //   axios.get(`/api/venues/${this.props.event.venueID}`)
  //     .then((res) => {
  //       this.setState({
  //         venue: Response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    console.log('rendering marker');
    return (
      // this.state.venue && 
      <Marker 
        icon={this.props.isHovered ? 'https://photogalleryproject.s3.us-east-2.amazonaws.com/googlemapspin.jpg' : ''}
        onClick={(e) => this.props.onToggleOpen(this.props.event, e)}
        position={{ lat: 37.778519, lng: -122.405640 }}
      />
    );
  }
}

export default EventMarker;