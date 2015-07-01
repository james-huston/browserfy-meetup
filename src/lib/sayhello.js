
var debug = require('debug')('app:lib:sayhello');
var jq = require('jquery');

module.exports = function sayHello() {
  debug('saying hello!');
  jq('#block-content').html('Hello All!');
};
