var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {

    console.log('Request from - '.concat(req.url))
    if (req.url === '/info') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1> This is just an example of routing </h1>');

    }


    // checking the route and creating the read stream
    if (req.url == '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        var readStream = fs.createReadStream(__dirname + '/templates/index.html', 'utf8');

        readStream.pipe(res);
    }







});

server.listen(8000);
console.log('Server is running');