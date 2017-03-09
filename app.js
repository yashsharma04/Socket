var express = require('express');
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
users= [] 
connections = [] 

server.listen(8000)
console.log("server runnning ")
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
  socket.emit('news', "Thanks for Joining")
  socket.on('my other event', function (data) {
    console.log(data)
  });
});