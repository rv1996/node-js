// This particular variable is not available to external modules
var counter = function(arr) {
    return 'There are ' + arr.length + ' elements';
};
var hello = function() {
    return "Hello";
}

var adder = function(a, b) {
    return `The sum of the number is ${a+b}`;
};

module.exports.pi = 3.14;

// add indivisual property to the export object
module.exports.counter = counter;
module.exports.hello = hello;
module.exports.adder = adder;

// module.exports = {
//     "counter": counter,
//     "hello": hello
// };