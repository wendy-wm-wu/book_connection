const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookconnection');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const venueSchema = mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
