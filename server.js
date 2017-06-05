const express = require('express')
const dotenv = require('dotenv')
const request = require('request')
const path = require('path')
const secure = require('express-force-https')
require('dotenv').config()

const app = express();

app.use(secure);

app.get('/api/sources', function (req, res) {
  request.get({
    url: process.env.SOURCES_URL
  },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
})



app.get('/api/source/:id', function (req, res) {
  if (!req.params.id) {
    res.status(500);
    res.send('Invalid source');
  }
  request.get({
    url: process.env.ARTICLES_URL + req.params.id + process.env.API_KEY
  },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
})

app.use(express.static(__dirname + '/dist'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(process.env.PORT || 8080)
