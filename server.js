var express = require('express');
var app = express();
var http = require('http').Server(app);

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
  
http.listen(3000, function(){
	console.log('listening on *:3000');
});