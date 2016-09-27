// use _.partial function to implement functions:

var _ = require('lodash');

function add(...args) {
    return args.reduce((sum, next) => sum + next, 0);
}

function pow(power, number = 2) {
    return Math.pow(number, power);
}

var addFiveAndSixAnd = _.partial(add, 5, 6);
var power = _.partial(pow);
var powerTwo = _.partial(pow, 2);
var powerThree = _.partial(pow, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)    <--- I assume Math.pow(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27

