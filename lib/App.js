var util = require('util')
	, path = require('path')
	, _ = require('underscore')
	, fs = require('fs')
	, async = require('async')
	, EventEmitter = require('events').EventEmitter;


var Config = {
	mainDir: path.dirname(__dirname)
};

function App(){ }

util.inherits(App, EventEmitter);

App.prototype.boot = function(cfg, cb){
	console.log('Booting up application');
	if(typeof cb !== 'function') cb = function(){};
	
	_.extend(Config, cfg);
	
	cb();
};

module.exports = new App;