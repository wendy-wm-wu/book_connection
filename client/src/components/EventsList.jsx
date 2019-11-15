import React from 'react';
import EventEntry from './EventEntry.jsx';

const EventsList = (props) => {
  console.log('rendering eventslist');
  const { events } = props;
  return (
    <div className="events-list">
      { events.map((event, index) => {
        return <EventEntry event={event} key={event.id} name={event.name} description={event.description} venueID={event.venueid} start={event.starttime} end={event.endtime} image={event.image} />
      })}
    </div>
  );
}

export default EventsList;
