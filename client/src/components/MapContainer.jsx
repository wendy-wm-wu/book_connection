import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import config from '../../../server/api.config.js';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  onMarkerClick(props, marker, event) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onClose(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    let marker = [];
    let infoWindow = [];
    for (let i = 0; i < this.props.venues.length; i++) {
        marker.push(<Marker name={`${this.props.venues[i].name}`} position={{ lat: `${this.props.venues[i].latitude}`, lng: `${this.props.venues[i].longitude}` }}  onClick={this.onMarkerClick} />);
        infoWindow.push(<InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}><div><h4>{this.state.selectedPlace.name}</h4></div></InfoWindow>)
    }
    const style = {
      width: '40%',
      height: '50%',
      position: 'fixed'
    }
    return (
    <div className="App">
    <Map google={this.props.google} style={style} onClick={this.onMapClicked}>
      {marker}
      {infoWindow}
    </Map>
    </div>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: (`${config.GOOGLE_MAPS_KEY}`)
 })(MapContainer);

