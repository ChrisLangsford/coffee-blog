var mongoose = require('mongoose');
var model = mongoose.model('User',{
    username: String,
    password: String
});

module.exports = model;