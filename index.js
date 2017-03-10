var express = require('express');
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var users= []
connections = [] 

server.listen(8000)
console.log("Server running")
app.get('/', function (req,res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection',function(socket){
  socket.emit('news',"Thanks for Joining")
  socket.on('username', function(data){
    console.log(data)
    connections.push(socket)
    users.push(data.user)
    console.log(users)
    io.emit('user_added',users)
  })
  socket.on('disconnect',function(data){
    console.log("got disconnected")
    var i = connections.indexOf(data)
    connections.splice(i,1)
    users.splice(i,1)
    console.log("users ",users)
  })
  socket.on('group_message',function(data){
      console.log("group_message",data)
      io.emit('group_message',{
          "msg":data.user+" : "+data.msg
      })
      // socket.broadcast.emit('group_message',{
      //     "msg":data.user+" : "+data.msg
      // })
  })
});