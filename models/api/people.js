/**
 * Created by cam on 8/9/2015.
 */
//defaultAPIModel = require("default.js")

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

module.exports = {
    template: "people",

    run: function(req, next){
        dataModel = {name: req.body.name}
        while (dataModel.name == req.body.name){
            dataModel = people[Math.floor(Math.random() * people.length)]
        }
        next(dataModel)
    }
}