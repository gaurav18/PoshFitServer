var express       = require('express');
var session       = require('express-session');
var cookieParser  = require('cookie-parser')
var mysql         = require('mysql');
var path          = require("path");
var bodyParser    = require("body-parser");

var app = express();
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'admin',
  password : '',
  database : 'poshfitDb'
});

console.log(connection);

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n"); 
    console.log(err);
}
});

app.use(cookieParser());
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
  console.log(req.session);
  console.log("session name = "+req.session.username+", session password is "+req.session.password);
  if(req.session.username) {
    res.redirect('/leaderboard');
  }
  else{
    res.sendFile('public/login.html' , { root : __dirname});
  }
});

app.post('/login',function(req,res){
  req.session.username = req.body.user;
  req.session.password = req.body.password;
  console.log("User name = "+req.session.username+", password is "+req.session.password);
  res.end("yes");
});

app.post('/leaderboard',function(req,res){
  res.end("yes");
});
