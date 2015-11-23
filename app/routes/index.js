module.exports = function routes(server) {

  var indexController = require('../controllers/indexController');
  var smsController = require('../controllers/smsController');
  server.get('/', smsController.list);
  server.get('sms/:id', smsController.getId)
  server.post('/sms/:sms', indexController.send);
}