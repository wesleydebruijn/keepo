var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Server static files
app.use(express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/app/views'));

io.on('connection', function(socket) {
   console.log('a user connected');
});

// Router
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// Register server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server succesfully started");
});
