const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require('./api.config.js');
const { selectBooks, selectVenues, saveBook } = require('./controllers/index.js');
const passport = require('passport');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../../client/public')));
app.use(express.static('./client/public'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api/books', (req, res) => {
  selectBooks((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/books/:query', (req, res) => {
  const { query } = req.params;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  axios.get(url)
    .then((results) => {
      res.send(results.data.items);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/api/books', (req, res) => {
  const { book } = req.body;

  saveBook(book.volumeInfo.title, book.volumeInfo.authors[0], book.volumeInfo.description, book.volumeInfo.imageLinks.smallThumbnail, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Successfully added');
    }
  });
});

app.get('/api/events/:city', (req, res) => {
  const { city } = req.params;
  console.log(city);
  const url = `https://www.eventbriteapi.com/v3/events/search?location.address=${city}&q=books&token=${config.EVENTBRITE_KEY}`;
  axios.get(url)
    .then((results) => {
      console.log(results.data.events);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/venues/:id', (req, res) => {
  const { id } = req.params;
  selectVenues(id, (req, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// app.post('/api/books', (req, res) => {
//   let title = req.body.title;
//   axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
//     .then((response) => {
//       console.log(response.data.items,'stored in database');
//       db.saveNewBook(response.data.items);
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// });

// app.get('/api/books', (req, res) => {
//   db.selectAll((err, books) => {
//     if (err) {
//       throw err;
//     } else {
//       res.send(books);
//     }
//   });
// });

// app.post('/api/events', (req, res) => {
//     let city = req.body.city;
//     city = city.replace(/ +/g, "");
//     axios.get(`https://www.eventbriteapi.com/v3/events/search?location.address=${city}&q=books&token=${config.EVENTBRITE_KEY}`)
//     .then((response) => {
//       db.saveEvent(response.data.events.slice(0, 10));
//       res.send(response.data.events.slice(0, 10));
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// })


// app.get('/api/events', (req, res) => {
//   db.grabVenues((err, venues) => {
//     if (err) {
//       throw err;
//     } else {
//       venues = venues.slice(0, 10);
//       let venueList = [];
//       let promises = [];
//       for (let i = 0; i < venues.length; i++) {
//         promises.push(
//           axios.get(`https://www.eventbriteapi.com/v3/venues/${venues[i]}?token=${config.EVENTBRITE_KEY}`)
//             .then((response) => {
//               venueList.push(response);
//             }));
//       }
//       Promise.all(promises)
//         .then(() => {
//           db.saveVenue(venueList);
//           let output = [];
//           for (let i = 0; i < venueList.length; i++) {
//             output.push({
//               name: venueList[i].data.name,
//               latitude: venueList[i].data.latitude,
//               longitude: venueList[i].data.longitude,
//             });
//           }
//           res.send(output);
//         })
//         .catch((error) => console.log(error));
//     }
//   });
// });

// app.get('/bestsellers', (req, res) => {
//   axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${config.NYT_KEY}`)
//     .then((response) => {
//       db.save(response.data.results.books);
//       res.send(response.data.results.books);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// });

app.listen(3000, () => {
  console.log('Book Connection is listening on port 3000!');
});