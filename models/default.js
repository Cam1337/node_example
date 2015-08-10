/**
 * Created by cam on 8/9/2015.
 */
module.exports = function(model, req, res, next){
    model.run(req, function(result){
        if (model.template !== null){
            res.render(model.template, result)
        }else{
            res.send(JSON.stringify(result))
        }

        if (model.after !== undefined && model.after !== null){
            model.after(result)
        }

        if (next !== undefined){
            next(result)
        }
    })
}
