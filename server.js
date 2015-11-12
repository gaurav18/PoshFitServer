var http = require('http');

function handleRequest(request, response) {
	response.writeHead(200);
	response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);


server.listen(8080);
