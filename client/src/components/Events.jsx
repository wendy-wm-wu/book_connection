import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import EventsList from './EventsList.jsx';
import MapContainer from './MapContainer.jsx';

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '560px auto',
  gridTemplateAreas: `
                    'header header'
                    'main aside'
                    'footer footer'
                    `,
};
const headerStyle = { gridArea: 'header' };
const mainStyle = { gridArea: 'main' };
const asideStyle = {
  gridArea: 'aside', position: 'fixed', top: '10px', left: '580px',
};
const footerStyle = { gridArea: 'footer' };

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      venues: [],
      events: [],
      searchLat: 37.780684,
      searchLng: -122.408986,
      hoveredEvent: { id: null },
    }
    this.eventMouseEnter = this.eventMouseEnter.bind(this);
    this.eventMouseLeave = this.eventMouseLeave.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    axios.get('/api/events')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  eventMouseEnter() {
    this.setState({
      hoveredEvent: event
    });
  };

  eventMouseLeave() {
    this.setState({
      hoveredEvent: { id: null }
    });
  };

  render () {

    return (
      <Container style={wrapperStyle}>
        <header style={headerStyle}/>
        <section style={mainstyle}>
          <EventsList 
          events={this.state.events}
          venues={this.state.venues}
          eventMouseEnter={this.eventMouseEnter}
          eventMouseLeave={this.eventMouseLeave}
          />
        </section>
        <aside style={asideStyle}>
          <MapContainer />
        </aside>
        <footer style={footerStyle} />
      </Container>
    );
  }
}

export default Events; 

