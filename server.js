var express = require('express');
var app = express();

// Server static files
app.use(express.static(__dirname + '/public'));
app.use('/build', express.static(__dirname + '/build'));

// Set jade as our renderer
app.set('view engine', 'jade');
app.set('views', __dirname);

// Router
app.get('/', function (req, res) {
  res.render('./app/index', { title: 'Hey', message: 'Hello world!'});
});

// Register server
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("App listening at http://localhost:3000");
});
