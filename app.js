console.log("hello");

var fun = function(x) {
    console.log("This is fucking X = " + x);
}

fun(20);

setTimeout(function() {
    console.log("This is funcking awesome");
    console.log(this);
}, 2000);
// let time = 0;
// var timer = setInterval(function() {

//     time += 2;
//     console.log("time passed - " + time);
//     if (time > 10) {
//         clearInterval(timer);
//     }

// }, 2000);

console.log(__dirname);
console.log(__filename);