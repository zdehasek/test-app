'use strict';

var express = require('express');
var app = express();

var working = true;

app.get('/', function (req, res) {
  if (working) {
    res.send('Hello World!');
  }
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
  setTimeout(function () {
    working = false;
    console.log('App is not working now!');
  }, 1000 * 60);
});
