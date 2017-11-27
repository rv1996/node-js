var http = require('http')

var fs = require('fs')

// reading this file
// this is inherited by event emitter there it have a custom event data
var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');

var myWriteStram = fs.createWriteStream(__dirname + '/writestream.txt')


// data is fired as it get an data
myReadStream.on('data', function(chunk) {
    console.log('New chuck - '.concat(chunk));
    console.log('\n');
    myWriteStram.write(chunk);
});


// Server basic ----------

// var server = http.createServer(function(req, res) {
//     console.log("A request was made - ".concat(req.url));
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('this is just a simple text on a server');

// }).listen(8888, callme);

// // if we add a listen method seperately we can easy add the log message but now we have to use a call to dispplay a log message





// // above can also be done using the following comment below
// // server.listen(8888,'127.0.0.1');
// function callme() {

//     console.log('Yes we are lsiten to port 8888');
// }

// server ends --------