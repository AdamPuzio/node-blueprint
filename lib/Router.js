
fs = util = require('util')
	, fs = require('fs')
	, async = require('async')
	, EventEmitter = require('events').EventEmitter;

var Config = {
	app: null
};
var Controllers = {};

function Router(){ }

util.inherits(Router, EventEmitter);

Router.prototype.boot = function(app){
	Config.app = app;
	this.loadControllers(app);
	this.loadRoutes(app);
};

Router.prototype.loadControllers = function(app){
	fs.readdirSync(__dirname + '/../controllers').forEach(function(file){
		var name = file.split('.js').shift();
		console.log('Loading ' + name);
		Controllers[name] = require(__dirname + '/../controllers/' + file);
	});
};

Router.prototype.loadRoutes = function(app){
	var self = this;
	fs.readdirSync(__dirname + '/../routes').forEach(function(file){
		if(file.slice(-3) != '.js') return;
		var name = file.split('.js').shift();
		console.log('Loading /routes/' + file);
		require(__dirname + '/../routes/' + file)(app, self);
	});
};

Router.prototype.route = function(route, handler){
	switch(typeof handler){
		case 'function':
			Config.app.get(route, handler);
			break;
		case 'string':
			var cInfo = handler.split('.');
			var controller = cInfo.shift();
			var method = cInfo.length == 0 ? 'index' : cInfo.shift();
			Config.app.get(route, function(req, res){
				Controllers[controller].beforeRender(req, res);
				Controllers[controller][method](req, res);
			});
			break;
		default:
			console.log('INVALID ROUTE');
	}
};

module.exports = new Router;