
var debug = require('debug')('app');
var sayHello = require('./lib/sayhello');

// enable debugging
localStorage.setItem('debug', 'app*');

// tell the world we are running!
debug('App is running');

sayHello();
