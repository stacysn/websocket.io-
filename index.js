var express = require('express');
//use socket in this server file
var socket = require('socket.io');


//App setup
var app = express();

//create server
var server = app.listen(4000, function(){
  console.log("listening to requests on port 4000");
})


//static files
app.use(express.static('public'));


//Socket setup
//want socket.io to work in this server
var io = socket(server);

//each client will have their own socket between that client and the server

io.on('connection', function(socket){
  console.log('made socket connection!', socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  })

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  })
})
