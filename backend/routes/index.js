var express = require('express');
var models  = require('../models');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

module.exports = router;
