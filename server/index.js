const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require('./api.config.js');

const db = require('./controllers/index.js');

let app = express();
app.use(cors());

app.use(express.static(__dirname + '/../../client/public'));


app.get('/books', (req, res) => {
  // if in database, get from database
  axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${config.NYT_KEY}`)
    .then((response) => {
      res.send(response.data.results.books);
    })
    .catch((error) => {
      console.log(error);
    });
  // send back to client
  // else
  // API call
  // put in database
  // send back to client
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
