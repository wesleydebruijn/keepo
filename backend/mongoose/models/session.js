var Schema = require('mongoose').Schema;

var Session = new Schema({
    name : { type: String, required: true }
});

module.exports = Session;
