var express = require('express');
var app = express();
var fs = require("fs");

// Add
var user = {
	"user4": {
		"name": "mohit",
		"password": "password4",
		"profession": "teacher",
		"id": 4
	}
}

app.get('/addUser', function (req, res) {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		data = JSON.stringify(data, null, 3); // To beautify
		console.log(data);
		res.end(data);
	});
})

// Delete by id

app.get('/deleteUser/:id', function (req, res) {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		delete data["user" + req.params.id];
		data = JSON.stringify(data, null, 3); // To beautify
		console.log(data);
		res.end(data);
	});
})

// Show List
app.get('/listUsers', function (req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log(data);
		res.end(data);
	});
})

// Show ID
app.get('/:id', function (req, res) {
	// First read existing users.
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		users = JSON.parse(data);
		var user = users["user" + req.params.id]
		user = JSON.stringify(user, null, 3); // To beautify
		console.log(user);
		res.end(user);
	});
})

// Home Page
app.get('', function (req, res) {
	fs.readFile(__dirname + "/" + "index.html", 'utf8', function (err, data) {
		//console.log(data);
		res.end(data);
	});
})


var server = app.listen(8081, "127.0.0.1", function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
})
