var express = require('express');
var router = express.Router();

/* GET home page. */

var defaultModelHandler = require("../models/default.js");

router.get('/', function(req, res){
  var model = require("../models/index");
  defaultModelHandler(model, req, res)
})

router.post('/api/people', function(req, res, next) {
  var model = require("../models/api/people");
  defaultModelHandler(model, req, res)
});

module.exports = router;
