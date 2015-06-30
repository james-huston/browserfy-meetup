
var debug = require('debug')('app');
var sayHello = require('./lib/sayhello');
var getData = require('./lib/data').getData;

// enable debugging
localStorage.setItem('debug', 'app*');

// tell the world we are running!
debug('App is running');

sayHello();

getData(function (err, data) {
  debug(err, data.text);
});
