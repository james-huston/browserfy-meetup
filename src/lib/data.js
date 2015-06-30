
var request = require('superagent');
var debug = require('debug')('app:lib:data');

module.exports = {

  getData: function (callback) {
    request
      .get('data.json')
      .end(function (err, res) {
        debug(err, res);

        if(err) {
          return callback(err);
        }

        callback(undefined, res.body.data);
      });
  }

};
