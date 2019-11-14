const { Pool } = require('pg');

const client = new Pool({ database: 'bookconnection' });

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to PG');
  }
});

const selectBooks = (callback) => {
  client.query('SELECT * FROM books LIMIT 10', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const saveBook = (title, author, description, image, callback) => {
  const query = `INSERT INTO books (title, author, description, image) VALUES ('${title}','${author}','${description}','${image}')`;
  console.log(query);
  client.query(query, (err, results) => {
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


// const saveEvent = () => {

// };


module.exports.selectBooks = selectBooks;
module.exports.selectVenues = selectVenues;
module.exports.saveBook = saveBook;
