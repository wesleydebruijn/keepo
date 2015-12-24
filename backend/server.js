var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var models = require("./sequelize/models");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

// allow cross origin requests
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

// routes
var routes = require('./routes/index');
app.use('/', routes);

// create server & sync sequelize
models.sequelize.sync().then(function () {
  var server = app.listen(3001, function() {
    console.log('Backend server listening on port ' + server.address().port);
  });
});
