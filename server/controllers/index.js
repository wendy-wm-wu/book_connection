const { Client } = require('pg');
const bcrypt = require('bcrypt');

const client = new Client({ database: 'bookconnection' });
client.connect();

const selectBooks = (callback) => {
  client.query('SELECT * FROM books LIMIT 10', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectVenues = (id, callback) => {
  client.query(`SELECT * FROM venues WHERE venueID = ${id} LIMIT 10`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// const saveVenue = () => {

// }

// const saveBook = (userID, book, callback) => {
//   // const { title, author, description, image } = book;
//   // const query = 
// };

// const saveEvent = () => {

// };


module.exports.selectBooks = selectBooks;
module.exports.selectVenues = selectVenues;

