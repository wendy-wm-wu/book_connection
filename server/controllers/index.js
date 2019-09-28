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

module.exports.selectAll = selectAll;
