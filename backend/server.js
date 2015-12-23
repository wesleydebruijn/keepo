var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var models = require("./models");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

// routes
var routes = require('./routes/index');
app.use('/', routes);

// create server
models.sequelize.sync().then(function () {
  var server = app.listen(3001, function() {
    console.log('Backend server listening on port' + server.address().port);
  });
});
