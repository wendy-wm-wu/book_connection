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


app.get('/books', (req, res) => {

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