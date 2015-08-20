function remoteRequestEvent(event, selector, el, options){
	$(document.body).on(event, selector, function(e) {
		e.preventDefault()
		remoteRequest(el, options)
	})
}

function remoteRequest(el, options){
	function insertHTML(data){
		if (options.empty){
			$(el).empty()
		}
		if (options.methods.after){
			data = options.methods.after(data)
		}
		$(el).html(data)

		if (options.methods.callback !== undefined && options.methods.callback !== null){
			options.methods.callback()
		}
	}

	var params = {}
	if (options.methods.before){
		var params = options.methods.before(el) || {}
	}
	switch(options.type.toLowerCase()){
		case "get":
			$.get(options.url, insertHTML, options.format || "html");
			break;
		case "post":
			$.post(options.url, params, insertHTML, options.format || "html")
			break;
		default:
			$.get(options.url, insertHTML, options.format || "html")
	}
}


//var opts = {
//	url: "/api/count",
//	type: "post",
//	format: "json", // specifcy content type json for response
//	methods: {
//		before: function(element){ // generate params for POST call
//			return {
//				id: $(element).prop('id'),
//				session: 123456
//			}
//		},
//		after: function(data){ // expects json to conver to html
//			return $("<div>", {class: "foo"}).text(data.count)
//		}
//	},
//	empty: true // clear the destination
//}
//
//remoteRequest("click","#myButton", "#myResult", opts)