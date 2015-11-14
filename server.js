var express = require('express');
var path = require("path"),
var app = express();

app.configure(function () {
    // Define our static file directory, it will be 'public'                                                                                           
    //app.use(express.static(path.join(__dirname, 'public')));
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

//---------------------------------Routes-----------------------------
//Login Page
app.get('/', function (req, res) {
  res.send('Hello World!');
});
