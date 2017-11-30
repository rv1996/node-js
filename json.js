var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {

    console.log('request was made from - '.concat(req.url))
    res.writeHead(200, { 'Content-Type': 'application/json' });

    var myObj = {

        name: 'Rupanshu Verma',
        age: 21,
        job: 'Web Developer',
        hobby: 'guitarist'
    }

    // we cannot write res.end(myObj) because res is an stream or a buffer and we are passing and object into it
    // so we first have to serialize our object so that it can be send via response stream
    res.end(JSON.stringify(myObj));



});

server.listen(3000, '127.0.0.1');
console.log('server is running on port number 3000');