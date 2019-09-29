const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstoread');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const newBooksSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  averageRating: Number,
  image: String,
});

const NewBook = mongoose.model('NewBook', newBooksSchema);

module.exports = NewBook;
