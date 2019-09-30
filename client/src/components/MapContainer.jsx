import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import config from '../../../server/api.config.js';

class MapContainer extends Component {
  render() {
    return (
    <div className="App">
    Hello World
    <Map google={this.props.google} />
    </div>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: (`${config.GOOGLE_MAPS_KEY}`)
 })(Map);
