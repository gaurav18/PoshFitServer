var express = require('express');
var session = require('express-session');
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var session;

app.use(session({secret: '$#$##@#!'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
  console.log('check session');
  session = req.session;
  console.log("session name = "+session.username+", session password is "+session.password);
  if(session.username) {
    res.redirect('/leaderboard');
  }
  else{
    res.sendFile('public/login.html' , { root : __dirname});
  }
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  session.username = user_name;
  session.password = password;
  res.end("yes");
});
