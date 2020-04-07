var fs = require('fs');
var path = require('path');
var sum = require('./helper').sum;
var getFirstRepeatedSum = require('./helper').getFirstRepeatedSum;

var input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .filter(function (word) {
    return word !== '';
  })
  .map(Number);

console.log('Result part 1:', sum(0, input));
console.log('Result part 2:', getFirstRepeatedSum(0, input));
