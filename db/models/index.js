const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const bookSchema = mongoose.Schema({
  rank: Number,
  weeks_on_list: Number,
  isbn: Number,
  description: String,
  title: String,
  author: String,
  image: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
