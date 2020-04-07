var fs = require('fs');
var path = require('path');
const helper = require('./helper');
const getNumberOfOverlappingClaims = helper.getNumberOfOverlappingClaims;
const getClaimWithNoOverlap = helper.getClaimWithNoOverlap;

var input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .filter(function (word) {
    return word !== '';
  });

console.log('Result part 1:', getNumberOfOverlappingClaims(input));
console.log('Result part 2:', getClaimWithNoOverlap(input));
