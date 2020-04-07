function sum(startValue, values) {
  return values.reduce(function (a, b) {
    return a + b;
  }, startValue);
}

function getFirstRepeatedSum(startValue, values) {
  var repeatedValue;
  var results = [startValue];
  var j = 0;
  do {
    for (const value of values) {
      s = results[results.length - 1] + value;
      if (results.indexOf(s) > -1) {
        repeatedValue = s;
        break;
      } else {
        results.push(s);
      }
    }
  } while (repeatedValue === undefined);
  return repeatedValue;
}

module.exports = {
  sum,
  getFirstRepeatedSum,
};
