const greet = require('./mo');
const mergeSort = require('./mergesort');
console.log('hello node');
//console.log(mergeSort([20,10,5,7]));
console.debug(greet.sayHelloInEnglish());
console.debug(greet.sayHelloInSpanish());
console.log(mergeSort.sort([20,10,5]));