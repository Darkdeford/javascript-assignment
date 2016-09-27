// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.

function doubleAll(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

function doubleAll2(numbers) {
  return numbers.map(number => number * 2);
}

//TEST
const numbers = [1,3,5,7,9,11];
console.log('doubleAll:  ', doubleAll(numbers));
console.log('doubleAll2: ', doubleAll2(numbers));