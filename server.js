var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//app.use(express.static(__dirname + '/public'));



var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

//---------------------------------Routes-----------------------------
//Login Page
app.get('/', function (req, res) {
  console.log('sending login file');
  res.sendFile('public/login.html' , { root : __dirname});
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
