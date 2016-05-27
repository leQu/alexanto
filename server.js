var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/build', express.static('build'));

app.use(function(req, res){
	res.sendFile(__dirname + '/index.html');
});

/*
This will also work:

app.get("*", function(req,res,next){
	res.sendFile(__dirname + '/index.html');
});

*/

io.on('connection', function(socket){
	socket.on('join', function(room){
		socket.join(room);
		var connected = io.sockets.adapter.rooms[room].length
		console.log(connected+" Are now connected to room: "+room);
	});

	socket.on('chat_message', function(user, msg, room){
		console.log(room+' --> '+user+": "+msg);
		socket.to(room).emit('messages', user, msg);
		socket.emit('messages', user, msg);
	});
});
  
http.listen(3000, function(){
	console.log('listening on *:3000');
});