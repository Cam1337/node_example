var default_helpers = require("dustjs-helpers").helpers;

module.exports = {
    format_list: function(chunk, context, bodies, params){
        var rstring = "";
        var count   = 0;
        var between = params.between || " "
        var list = context.get(params.list)
        for (var l_i in list){
            if (params.val !== undefined){
                var item = list[l_i][params.val]
            }else{
                var item = list[l_i]
            }
            if (count == 0){
                rstring += item
            }
            else if (count == list.length - 1){
                rstring += between + params.last || "and" + between +  item
            }
            else {
                rstring += params.sep || "," + between + item
            }
            count += 1


        }
        return chunk.write(rstring)
    },
    pluralize_years: function(chunk, context, bodies, params){
        var age = context.get(params.key)
        var plural_string = age == 1 ? "year" : "years";
        return chunk.write(plural_string)
    }
}

for (var cdh in default_helpers){
    module.exports[cdh] = default_helpers[cdh]
}