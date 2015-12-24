var express = require('express');
var models  = require('../sequelize/models');
var mongoose = require('../mongoose/database');
var router = express.Router();

// Sequelize test
router.get('/sequelize', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

// Mongoose test
router.get('/session', function(req, res, next) {
  var name = "SessionName1";

  var Session = mongoose.model('Session', mongoose.Session);
  var session = new Session({
      name: name
  });

  session.save(function(err, session) {
      Session.findById(session._id, function(err, session) {
        res.send(session);
      });
  });
});

module.exports = router;
