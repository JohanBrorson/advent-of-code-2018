var fs = require('fs');
var path = require('path');
const helper = require('./helper');
const getChecksum = helper.getChecksum;
const getCommonLettersFromElementsWithOneDifferentCharacter =
  helper.getCommonLettersFromElementsWithOneDifferentCharacter;

var input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .filter(function(word) {
    return word !== '';
  });

console.log('Result part 1:', getChecksum(input));
console.log(
  'Result part 2:',
  getCommonLettersFromElementsWithOneDifferentCharacter(input),
);
