const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/events');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  venue_id: Number,
  start: String,
  end: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
