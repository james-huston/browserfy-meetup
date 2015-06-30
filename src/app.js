
var debug = require('debug')('app');

document.querySelector('#block-content').innerHTML = 'Hello All!';

// enable debugging
localStorage.setItem('debug', 'app*');

// tell the world we are running!
debug('App is running');
