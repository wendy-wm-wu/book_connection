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

app.post('/books', (req, res) => {
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

app.get('/books', (req, res) => {
  db.selectAll((err, books) => {
    if (err) {
      throw err;
    } else {
      res.send(books);
    }
  });
});

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