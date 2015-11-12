var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

function handleRequest(request, response) {
	response.end('It Works!! Path Hit: ' + request.url);
}

server.listen(8080);
