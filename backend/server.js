var express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  logger = require('morgan');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.get('/', function(req, res, next) {
  res.send('Dit is een test');
})

http.createServer(app).listen(3001, function (err) {
  console.log('Backend server listening on port 3001');
});
