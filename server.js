var http = require('http')

var fs = require('fs')

// reading this file
// this is inherited by event emitter there it have a custom event data


// data is fired as it get an data
// this particular code can also be replaces by using pipes
// this is piping from a readable stream to a writable stream
// myReadStream.pipe(myWriteStram);
// myReadStream.on('data', function(chunk) {
//     console.log('New chuck - '.concat(chunk));
//     console.log('\n');
//     myWriteStram.write(chunk);
// });


// Server basic ----------

var server = http.createServer(function(req, res) {
    console.log("A request was made - ".concat(req.url));
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var myReadStream = fs.createReadStream(__dirname + '/templates/index.html', 'utf8');

    //var myWriteStram = fs.createWriteStream(__dirname + '/writestream.txt')
    // above stream is not required be res object is already a writeable stream we just have to
    // pipe it with the readble stream
    // myReadStream.pipe(myWriteStram);

    myReadStream.pipe(res)

    // res.end('<h1>Hey how you doing</h1>'); ------ above code does the same thing 



}).listen(8888, callme);

// // if we add a listen method seperately we can easy add the log message but now we have to use a call to dispplay a log message





// // above can also be done using the following comment below
// // server.listen(8888,'127.0.0.1');
function callme() {

    console.log('Yes we are lsiten on the port 8888');
}

// server ends --------