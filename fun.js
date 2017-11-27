function callFunction(fun) {
    fun();
}
sayHi();

function sayHi() {
    console.log("hi");
}


// funciton expression cannot be called before they are declared
var sayBye = function() {
    console.log('bye');
}
callFunction(sayBye);