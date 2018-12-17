const sum = require('./helper').sum;
const getFirstRepeatedSum = require('./helper').getFirstRepeatedSum;

describe('Day 1', () => {
  var startValue = 0;

  describe('Part 1', () => {
    test('sums with both positive and negative values', () => {
      var values = [+1, -2, +3, +1];
      expect(sum(startValue, values)).toBe(3);
    });

    test('sums with only positive values', () => {
      var values = [+1, +1, +1];
      expect(sum(startValue, values)).toBe(3);
    });

    test('sums with only negative values', () => {
      var values = [-1, -2, -3];
      expect(sum(startValue, values)).toBe(-6);
    });

    test('sums with result zero', () => {
      var values = [+1, +1, -2];
      expect(sum(startValue, values)).toBe(0);
    });
  });

  describe('Part 2', () => {
    test('gets first repeated sum without restarting the array', () => {
      var values = [+1, -1];
      expect(getFirstRepeatedSum(0, values)).toBe(0);
    });

    test('gets first repeated sum with array restarted once', () => {
      var values = [+3, +3, +4, -2, -4];
      expect(getFirstRepeatedSum(0, values)).toBe(10);
    });

    test('gets first repeated sum with array restarted twice', () => {
      var values = [-6, +3, +8, +5, -6];
      expect(getFirstRepeatedSum(0, values)).toBe(5);
    });

    test('c', () => {
      var values = [+7, +7, -2, -7, -4];
      expect(getFirstRepeatedSum(0, values)).toBe(14);
    });
  });
});
