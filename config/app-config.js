var path = require('path')
	, nconf = require('nconf');

nconf.argv().env();

console.log('Loading configuration...');

if(nconf.get('NODE_ENV')){
	var conf = nconf.get('NODE_ENV');
	console.log('Loading ' + conf + ' configuration');
	nconf.file({ file: './env/' + conf + '.json' });
}else if(nconf.get('config')){
	var conf = nconf.get('config');
	console.log('Loading ' + conf + ' configuration');
	nconf.file({ file: './' + conf + '.json' });
}else{
	nconf.file({ file: './config.json' });
}

nconf.defaults({
	port: 1979
	, mainDir: path.dirname(__dirname)
	, logLevel: 0
});
var config = nconf.get();

module.exports = config;