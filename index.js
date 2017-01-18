'use strict';

var express = require('express');
var app = express();
var text = "App version 2";

app.get('/', function (req, res) {
    res.send(text);
});

app.listen(8080, function () {
  console.log(text);
});
