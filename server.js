var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// FRONT-END SERVER
// Server static files
app.use(express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/app/views'));

// Router
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// Register server
var server = http.listen(3000, function() {
  console.log('Frontend server listening on port ' + server.address().port);
});

var clients = [];

io.on('connection', function(socket){
  socket.on('save', function(data) {
    var client = new Object();
    client.id = data.id;
    client.name = data.name;
    client.session = "";
    clients.push(client);
  });
});
