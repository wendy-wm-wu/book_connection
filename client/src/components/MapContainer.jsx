import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import EventMarker from './EventMarker.jsx';
import EventEntry from './EventEntry.jsx';

const infoWindowStyle = {
  width: '240px',
  height: '320px',
  margin: '0',
  padding: '0',
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: null,
      markerPosition: null,
      isOpen: false,
    };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen(event, loc) {
    if (!loc) {
      this.setState({ currentEvent: null });
      this.setState({ markerPosition: null });
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: false });
      this.setState({ currentEvent: event });
      this.setState({ markerPosition: { lat: loc.latLng.lat(), lng: loc.latLng.lng() } });
      this.setState({ isOpen: true });
    }
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={14} // between 0 and 18
        defaultCenter={{ lat: this.props.searchLat, lng: this.props.searchLng }}
        clickableIcons={false}
      >
        {this.props.events.map(event => (
          <EventMarker
            key={event.id}
            event={event}
            onToggleOpen={this.onToggleOpen}
            isHovered={this.props.hoveredEvent.id === event.id}
          />
        ))}
        {this.state.isOpen &&
        <InfoWindow
          position={this.state.markerPosition}
          onCloseClick={this.onToggleOpen}
        >
          <div>
            {this.state.currentEvent &&
            <EventEntry
              event={this.state.currentEvent}
              style={infoWindowStyle}
            />
            }
          </div>
        </InfoWindow>}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapContainer));

