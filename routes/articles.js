var express =require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost/proto-blog');

module.exports = router;