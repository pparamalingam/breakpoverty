(function () {
    "use strict";

    var myDb = require('../managers/testDbManager');

    module.exports = {

      list: function listAction (req, res, next) {
        res.send(myDb.getAll());
        return next();
      }
      
    }
}())