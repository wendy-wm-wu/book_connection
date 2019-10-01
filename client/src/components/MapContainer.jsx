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


{/* <Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={'SOMA'}
      position={{lat: 37.778519, lng: -122.405640}} />
      <Marker
      name={'Dolores park'}
      position={{lat: 37.759703, lng: -122.428093}} />
      <Marker />
      <Marker
      name={'Your position'}
      position={{lat: 37.762391, lng: -122.439192}}
      icon={{
        url: "/path/to/custom_icon.png",
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(64,64)
      }} /> */}