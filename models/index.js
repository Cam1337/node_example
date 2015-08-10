/**
 * Created by cam on 8/9/2015.
 */
module.exports = {
    template: "index",
    run: function(req, next){
        dataModel = {title: "Random People"}
        next(dataModel)
    }
}