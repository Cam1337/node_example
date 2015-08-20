/**
 * Created by cam on 8/9/2015.
 */
module.exports = {
    template: "index",
    run: function(req, next){
        var username;
        if (req.user === undefined){
            username = "anonymous"
        }else{
            username = req.user.name
        }
        dataModel = {title: "Random People", user:username, history: req.cookies["last-visited"]}
        next(dataModel)
    },
    cookies: {
        track: true,
        set: function(req, result, next){
            next({})
        },
        del: function(req, result, next){
            next({})
        }
    }
}