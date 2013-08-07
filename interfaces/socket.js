var config = require('../config/app-config')
	, socket = require('socket.io');

module.exports = function(server){
	var io = socket.listen(server);
	io.set('log level', config.logLevel);
	
	io.sockets.on('connection', function(socket){
		
		socket.on('disconnect', function() {
			
		});
		
		socket.on('auth', function() {
			
		});
	});
};