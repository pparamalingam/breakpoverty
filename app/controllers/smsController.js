(function () {
    "use strict";

    var myDb = require('../managers/testDbManager');
    var http = require('http');
    var twilio = require('twilio');

    module.exports = {

      list: function listAction (req, res, next) {
        res.send(myDb.getAll());
        return next();
      }

    }
}())