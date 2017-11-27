var general = require('./count');
console.log(typeof(general));
// require find the export property of that module and return it to the corresonding variable
console.log(general.counter(['adasdas', 'asdasd', 'sadasdadas']));
console.log(general.hello());

console.log(general.hello());