var express = require('express');
var models  = require('../sequelize/models');
var mongoose = require('../mongoose/database');
var router = express.Router();

const SESSION_NOT_FOUND = "Session is not found";
const SESSION_ALREADY_EXISTS = "Session already exists";

// Sequelize test
router.get('/sequelize', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

// Mongoose test
router.post('/session/join', function(req, res, next) {
  //io.hello();
  var Session = mongoose.model('Session', mongoose.Session);

  Session.findOne({ 'name': req.body.name }, function(err, data) {
    if(data == null) {
      res.send(JSON.stringify({ error: SESSION_NOT_FOUND }));
    } else {
      res.send(data);
    }
  });
});

router.post('/session/create', function(req, res, next) {
  var Session = mongoose.model('Session', mongoose.Session);
  var session = new Session({
    name: req.body.name
  });

  Session.findOne({ 'name': req.body.name }, function(err, data) {
    if(data != null) {
      res.send(JSON.stringify({ error: SESSION_ALREADY_EXISTS }));
      return;
    } else {
      session.save(function(err, session) {
        if(err) console.log(err);
        Session.findById(session._id, function(err, session) {
          res.send(session);
        })
      });
    }
  });
})

module.exports = router;
