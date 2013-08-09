var config = require('./config/app-config')
	App = require('./lib/App');

App.boot(config, function(){
	require('./interfaces/web')(config);
});