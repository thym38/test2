const express = require("express");
const socket = require('socket.io');
const app = express();

let server = app.listen(80);
console.log('The server is now running at http://localhost/');
app.use(express.static("public"));

let io = socket(server);


io.sockets.on('connection', function (socket) {
  console.log("Someone just connected!");
  
  // Echo back messages from the client
  socket.on('message', function (message) {
    console.log("Got message: " + message);
    socket.emit('message', message);
  });  
});