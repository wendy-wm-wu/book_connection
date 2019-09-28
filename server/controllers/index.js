const Book = require('../../db/models/index.js');

const selectAll = (callback) => {
  Book.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const save = (data, callback) => {
  let title = new Book({
    rank: Number,
    weeks_on_list: Number,
    isbn: Number,
    description: String,
    title: String,
    author: String,
    image: String,
  });
  Book.create({
    rank: data.rank,
    weeks_on_list: data.weeks_on_list,
    isbn: data.primary_isbn13,
    description: data.description,
    title: data.title,
    author: data.author,
    image: data.book_image,
  }, (err, title) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, title);
    }
  });
};

module.exports = {
  selectAll,
  save,
};
