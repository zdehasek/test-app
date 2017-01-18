'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  if (working) {
    res.send('Hello World!');
  }
});

app.listen(8080, function () {
  console.log('App version 1');
});
