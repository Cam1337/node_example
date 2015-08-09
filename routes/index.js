var express = require('express');
var router = express.Router();

/* GET home page. */

var defaultAPIModel = require("../models/api/default.js");

router.get('/', function(req, res){
  res.render('index', {title: "Random People"})
})

router.post('/api/people', function(req, res, next) {
  var model = require("../models/api/people");
  defaultAPIModel(model, req, res, function(result){
    console.log(result)
  })
});

module.exports = router;
