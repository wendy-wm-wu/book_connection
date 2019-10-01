import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import config from '../../../server/api.config.js';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: '',
    }
  }
  render() {
    let marker = [];
    for (let i = 0; i < this.props.venues.length; i++) {
        marker.push(<Marker name={`${this.props.venues[i].name}`} position={{ lat: `${this.props.venues[i].latitude}`, lng: `${this.props.venues[i].longitude}` }}  />);
    }
    const style = {
      width: '40%',
      height: '50%',
      position: 'fixed'
    }
    return (
    <div className="App">
    <Map google={this.props.google} style={style}>
      {marker}
    </Map>
    </div>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: (`${config.GOOGLE_MAPS_KEY}`)
 })(MapContainer);

