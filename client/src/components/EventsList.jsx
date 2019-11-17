import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import EventEntry from './EventEntry.jsx';

const eventListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
};

const eventEntryStyle = {
  width: '240px',
  height: '400px',
  overflow: 'hidden',
  borderRadius: 4,
  borderWidth: 0.5,
  borderStyle: 'solid',
  borderColor: '#d6d7da',
};

class EventsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row style={eventListStyle}>
        {this.props.events.map(event => (
          <Col
            key={event.id}
            onMouseEnter={e => this.props.eventMouseEnter(event, e)}
            onMouseLeave={this.props.eventMouseLeave}
          >
            <EventEntry event={event} key={event.id} style={eventEntryStyle} name={event.name} description={event.description} venueID={event.venueid} start={event.starttime} end={event.endtime} image={event.image} 
            />
          </Col>
        ))}
      </Row>

      // <div className="events-list">
      //   { events.map((event, index) => {
      //     return <EventEntry event={event} key={event.id} style={eventEntryStyle} name={event.name} description={event.description} venueID={event.venueid} start={event.starttime} end={event.endtime} image={event.image} eventMouseEnter={event.eventMouseEnter} eventMouseLeave={event.eventMouseLeave} />
      //   })}
      // </div>
    );
  }
}

export default EventsList;
