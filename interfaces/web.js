var path = require('path')
	, http = require('http')
	, express = require('express')
	, engine = require('ejs-locals')
	, app = express()
	, server = http.createServer(app)
	, routes = require('../routes');

var config;
var module_scripts = [];

module.exports = function(cfg){
	config = cfg;
	var dir = config.mainDir;
	
	app.configure(function(){
		app.set('port', config.port);
		app.set('views', dir + '/views');
		app.set('view engine', 'ejs');
		app.engine('ejs', engine);
		//app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser(config.secret || 'node-blueprint-app'));
		app.use(express.session());
		app.use(app.router);
		app.use(require('less-middleware')({ src: dir + '/public' }));
		app.use(express.static(path.join(dir, 'public')));
	});
	
	app.configure('development', function(){
		app.use(express.errorHandler());
	});
	
	app.get('/', routes.index);
	
	server.listen(app.get('port'), function(){
		console.log('Listening on port ' + app.get('port'));
		require('./socket.js')(server);
	});
};
