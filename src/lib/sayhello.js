
var debug = require('debug')('app:lib:sayhello');

module.exports = function sayHello() {
  debug('saying hello!');
  document.querySelector('#block-content').innerHTML = 'Hello All!';
};
