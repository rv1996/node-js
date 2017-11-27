var events = require('events')
var util = require('util')


//make our custom event in the node js

var myEmitter = new events.EventEmitter();

myEmitter.on("randomEvent", function(msg) {
    console.log(msg.repeat(7));
});

myEmitter.emit('randomEvent', 'funn ');



var Person = function(name) {

    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var rupanshu = new Person("Rupanshu");
var naruto = new Person("Naruto");

var people = [james, rupanshu, naruto];

people.forEach(function(person) {
    person.on("speak", function(msg) {
        console.log("My name is " + this.name + ". I said - " + msg);
    })
})

james.emit('speak', 'i love naruto');
rupanshu.emit('speak', 'I hope someday i\'ll be very happy');