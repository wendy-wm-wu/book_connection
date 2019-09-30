const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require('./api.config.js');

const db = require('./controllers/index.js');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../../client/public'));
app.use(express.static('./client/public'));

app.post('/api/books', (req, res) => {
  let title = req.body.title;
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then((response) => {
      console.log(response.data.items,'stored in database');
      db.saveNewBook(response.data.items);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/api/books', (req, res) => {
  db.selectAll((err, books) => {
    if (err) {
      throw err;
    } else {
      res.send(books);
    }
  });
});

app.post('/api/events', (req, res) => {
    let city = req.body.city;
    axios.get(`https://www.eventbriteapi.com/v3/events/search?location.address=${city}&q=books&token=${config.EVENTBRITE_KEY}`)
    .then((response) => {
      db.saveEvent(response.data.events.slice(0, 10));
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
    })
})


app.get('/api/events', (req, res) => {
  db.grabVenues((err, venues) => {
    if (err) {
      throw err;
    } else {
      let venueList = [];
      let promises = [];
      for (let i = 0; i < venues.length; i++) {
        promises.push(axios.get(`https://www.eventbriteapi.com/v3/venues/${venues[i]}?token=${config.EVENTBRITE_KEY}`)
        .then((response) => {
          venueList.push(response);
        }));
      }
      Promise.all(promises)
      .then(() => console.log(venueList));
    }
  })
})

app.get('/bestsellers', (req, res) => {
  axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${config.NYT_KEY}`)
    .then((response) => {
      db.save(response.data.results.books);
      res.send(response.data.results.books);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});