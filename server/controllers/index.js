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

const save = (data) => {
  let title = new Book({
    rank: Number,
    weeks_on_list: Number,
    isbn: Number,
    description: String,
    title: String,
    author: String,
    image: String,
  });
  for (let i = 0; i < data.length; i++) {
    Book.create({
      rank: data[i].rank,
      weeks_on_list: data[i].weeks_on_list,
      isbn: data[i].primary_isbn13,
      description: data[i].description,
      title: data[i].title,
      author: data[i].author,
      image: data[i].book_image,
    }, (err, title) => {
      if (err) {
        return handleError(err);
      }
    });
  }
};

module.exports = {
  selectAll,
  save,
};
