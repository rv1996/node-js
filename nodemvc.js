var express = require('express');

var app = express();


app.get('/', function(req, res) {

    console.log("Request - ".concat(req.url));
    res.send("<h1>just a simple string</h1>");
});

app.get('/contact', function(req, res) {

    console.log("Request - ".concat(req.url));
    res.send("This is the contact page");
});



app.listen(3000)