import React from 'react';
import Event from './Event.jsx';

const EventsList = (props) => {
  console.log(props);
  return (
    <div className="events-list">
      {props.events.map((event, index) => {
        return <Event event={event} index={index} name={event.name.text} start={event.start.local} end={event.end.local} description={event.description.text} />
      })}
    </div>
  );
}

export default EventsList;
