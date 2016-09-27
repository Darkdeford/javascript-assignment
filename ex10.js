/*
SPY

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Example

    var spy = Spy(console, 'error')
    
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    
    console.log(spy.count) // 3

## Arguments

  * target: an object containing the method `method`
  * method: a string with the name of the method on `target` to spy on.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

*/

function Spy(object, method) {
    let self = {
        count: 0
    };

    let basicMethod = object[method];
    object[method] = (...args) => {
        self.count++;
        basicMethod.apply(object, args);
    };
    return self;
}

let spy = Spy(console, 'error');
console.log(spy.count);
// 0

console.error('Error occured');
console.log(spy.count);
//1

console.error('Error occured');
console.error('Error occured');
console.log(spy.count);
//3
