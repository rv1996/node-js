var fs = require('fs')

// blocking code
// because of synchornized method it won't execute code next to it
// Non sync version of the same file exist
// var file = fs.readFileSync('readme.txt', 'utf8')

// console.log(file)
// fs.writeFileSync('writeme.txt', 'This is the file i just created')


// creating diretoris in node

// fs.rmdirSync('stuff')

// doing the same using async method

// fs.mkdir('stuff', function() {

//     fs.readFile('readme.txt', 'utf8', function(err, data) {
//         fs.writeFile('./stuff/write.txt', data);

//     });

// });

// deleting the directory recursively


fs.unlink('./stuff/write.txt', function() {
    fs.rmdir('stuff');
});