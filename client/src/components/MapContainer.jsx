import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import config from '../../../server/api.config.js';

class MapContainer extends Component {
  render() {
    const style = {
      width: '40%',
      height: '40%',
      position: 'fixed'
    }
    return (
    <div className="App">
    <Map google={this.props.google} style={style}>
      <Marker />
    </Map>
      
    </div>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: (`${config.GOOGLE_MAPS_KEY}`)
 })(MapContainer);
