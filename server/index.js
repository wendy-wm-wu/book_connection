const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require('./api.config.js');
const { selectBooks, selectVenues, saveBook, saveEvent, selectEvents, changeReadStatus } = require('./controllers/index.js');
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

//TODO: find book in database with the id and change readBook to true and send status code to client 
app.post('/api/books/:id', (req, res) => {
  const { id } = req.params; 
  changeReadStatus(id, (err, results) => {
    if (err) {
      res.sendStatus(500); 
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/api/events', (req, res) => {
  selectEvents((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/events/:query', (req, res) => {
  const { query } = req.params;
  console.log(query);
  const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${query}&q=books&token=${config.EVENTBRITE_KEY}`;
  axios.get(url)
    .then((results) => {
      console.log('results', results.events);
      results.events.forEach((event) => {
        if (event.logo.url !== undefined) {
          saveEvent(event.name, event.summary, event.venue_id, event.start.local, event.end.local, event.logo.url, (err, data) => {
            if (err) {
              res.sendStatus(500);
            } else {
              res.send(data);
            }
          });
        }
      });
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

app.listen(3000, () => {
  console.log('Book Connection is listening on port 3000!');
});
