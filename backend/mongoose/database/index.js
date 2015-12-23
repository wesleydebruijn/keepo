var mongoose = require('mongoose');

// set models
require('./../models')(mongoose);

module.exports = (function() {
    return mongoose.connect('mongodb://127.0.0.1:27017/keepo');
})();
