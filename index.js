/* global moment, mathjs */
var moment = require('moment'); // require
var math = require('mathjs');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(math.chain(3).add(4).multiply(2).multiply(2).done());

var food = "pickles";
console.log(`My favorite food is ${food}`);
