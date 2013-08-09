# Node.js BluePrint Application

Node-BluePrint is an empty Node.js application bundles that can be used to quickly build 
out your application. It combines some of the best back and front end applications and 
libraries available.

## Installation
    npm install
	
``` bash
$ node app.js
```

## Configuration

[NConf](https://github.com/flatiron/nconf) is the configuration module of choice. It has 
been set up in `config/app-config.js` to be able to parse no config file, a default config 
file or take command line arguments or environmental variables to either set config variables 
or load specific config files. It will automatically attempt to load `config/config.js`.

``` bash
$ NODE_ENV=production app.js
```
This will attempt to load the config file `config/env/production.json`.

``` bash
$ app.js --config test
```
This will attempt to load the config file `config/test.json`

## Docs & Resources
### Node.js Modules
* [Express](https://github.com/visionmedia/express)
* [EJS](https://github.com/visionmedia/ejs)
* [EJS-Locals](https://github.com/RandomEtc/ejs-locals)
* [LESS Middleware](https://github.com/emberfeather/less.js-middleware)
* [Socket.io](https://github.com/learnboost/socket.io/)
* [Socket.io Client](https://github.com/LearnBoost/socket.io-client)
* [Async](https://github.com/caolan/async)
* [Underscore.js](https://github.com/jashkenas/underscore)
* [NConf](https://github.com/flatiron/nconf)

### Front-end Libraries
* [Bootstrap](https://github.com/twbs/bootstrap)