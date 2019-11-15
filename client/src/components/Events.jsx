import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
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
      events: [],
      searchLat: 37.780684,
      searchLng: -122.408986,
      hoveredEvent: { id: null },
      city: '',
    }
    this.eventMouseEnter = this.eventMouseEnter.bind(this);
    this.eventMouseLeave = this.eventMouseLeave.bind(this);
    this.eventsQuery = this.eventsQuery.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    axios.get('/api/events')
      .then((res) => {
        console.log('success', res.data.rows);
        this.setState({
          events: res.data.rows,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  eventsQuery(query) {
    axios.get(`/api/events/${query}`)
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
    console.log('events',this.state.events);
    return (
      <Container style={wrapperStyle}>
        <header style={headerStyle}/>
        <section style={mainStyle}>
        <br />
        <br />
        <br />
        <br />
          <input type="text" 
                placeholder="Search events..." 
                onChange={(e) => { this.setState({ city : e.target.value }); }}
          />
          <Button variant="primary" 
                  onClick={() => this.eventsQuery(this.state.city)}>Search Events 
          </Button>
            <EventsList 
              events={this.state.events}
              eventMouseEnter={this.eventMouseEnter}
              eventMouseLeave={this.eventMouseLeave}
            />
        </section>
        <aside style={asideStyle}>
          <MapContainer
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '600px', width: '700px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              searchLat={this.state.searchLat}
              searchLng={this.state.searchLng}
              events={this.state.events}
              hoveredEvent={this.state.hoveredEvent}
          />
        </aside>
        <footer style={footerStyle} />
      </Container>
    );
  }
}

export default Events; 

