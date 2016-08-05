
var express = require("express");
var path = require("path");
var app = express(); 
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

app.get('/results', function(req, res) {
	console.log(req.body);
 res.render("results", {data: data});
})
// POST PROCESS 
app.post('/create', function(req, res) {
	console.log(req.body);
	data = {
		name : req.body.name,
		location : req.body.location,
		language : req.body.language,
		comment : req.body.comment,
	}
 res.redirect('/results');
})
app.listen(8000, function() {
 console.log("listening on port 8000");
});