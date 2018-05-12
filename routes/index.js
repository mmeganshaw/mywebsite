var express = require('express');
var path = require('path');
var app = express();


module.exports = function(app) {
  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/contact.html'));
  });

  //route to the home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

  app.get('*',function (req, res) {
    res.redirect('/');
});

};

