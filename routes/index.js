var express = require('express');
var router = express.Router();

/* GET home page. */

var people = [
  {
    name: "bob",
    age: "15",
    friends: [
      {name: "amy"},
      {name: "chris"},
      {name: "roy"}
    ]
  },
  {
    name: "roy",
    age: "22",
    friends: [
      {name: "bob"},
      {name: "amy"},
      {name: "chris"}
    ]
  },
  {
    name: "amy",
    age: "1",
    friends: [
      {name: "bob"},
      {name: "chris"},
      {name: "roy"}
    ]
  },
  {
    name: "chris",
    age: "53",
    friends: [
      {name: "bob"},
      {name: "roy"},
      {name: "amy"}
    ]
  }
]

router.get('/', function(req, res){
  res.render('index', {})
})

router.get('/api/people', function(req, res, next) {
  var model = people[Math.floor(Math.random() * people.length)]
  model.title = "Express"
  res.render('people', model);
});

module.exports = router;
