var http = require('http');
var dispatcher = require('httpdispatcher');

function handleRequest(request, response) {
	try {
	        //log the request on console
	        console.log(request.url);
	        //Disptach
	        dispatcher.dispatch(request, response);
	    } catch(err) {
	        console.log(err);
	    }
}

dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

var server = http.createServer(handleRequest);


server.listen(8080);
