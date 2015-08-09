var express = require('express');
var router = express.Router();

/* GET home page. */

var defaultModel = require("../models/default.js");

router.get('/', function(req, res){
  var model = require("../models/index");
  defaultModel(model, req, res)
})

router.post('/api/people', function(req, res, next) {
  var model = require("../models/api/people");
  defaultModel(model, req, res)
});

module.exports = router;
