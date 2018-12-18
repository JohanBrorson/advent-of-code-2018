const helper = require('./helper');
const hasLettersRepeatedTwoOrThreeTimes =
  helper.hasLettersRepeatedTwoOrThreeTimes;
const sumElementsAtSameIndex = helper.sumElementsAtSameIndex;
const multiplyElements = helper.multiplyElements;
const getChecksum = helper.getChecksum;
const getCommonLetters = helper.getCommonLetters;
const getCommonLettersFromElementsWithOneDifferentCharacter =
  helper.getCommonLettersFromElementsWithOneDifferentCharacter;

describe('Day 2', () => {
  describe('Part 1', () => {
    const letters = [
      'abcdef',
      'bababc',
      'abbcde',
      'abcccd',
      'aabcdd',
      'abcdee',
      'ababab',
    ];
    const expected = [[0, 0], [1, 1], [1, 0], [0, 1], [1, 0], [1, 0], [0, 1]];

    test('abcdef contains no letters that appear exactly two or three times', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[0])).toEqual(
        expected[0],
      );
    });

    test('bababc contains two a and three b, so it counts for both', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[1])).toEqual(
        expected[1],
      );
    });

    test('abbcde contains two b, but no letter appears exactly three times', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[2])).toEqual(
        expected[2],
      );
    });

    test('abcccd contains three c, but no letter appears exactly two times', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[3])).toEqual(
        expected[3],
      );
    });

    test('aabcdd contains two a and two d, but it only counts once', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[4])).toEqual(
        expected[4],
      );
    });

    test('abcdee contains two e', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[5])).toEqual(
        expected[5],
      );
    });

    test('ababab contains three a and three b, but it only counts once', () => {
      expect(hasLettersRepeatedTwoOrThreeTimes(letters[6])).toEqual(
        expected[6],
      );
    });

    test('sums elements at the same index', () => {
      expect(sumElementsAtSameIndex(expected)).toEqual([4, 3]);
    });

    test('multiplies elements', () => {
      expect(multiplyElements([4, 3])).toEqual(12);
    });

    test('gets a checksum', () => {
      expect(getChecksum(letters)).toEqual(12);
    });
  });

  describe('Part 2', () => {
    const letters = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz',
    ];

    test('gets the common letters from two strings', () => {
      expect(getCommonLetters(letters[0], letters[5])).toEqual('ace');
      expect(getCommonLetters(letters[1], letters[4])).toEqual('fgij');
      expect(getCommonLetters(letters[0], letters[0])).toEqual('abcde');
    });

    test('gets common letters from elements in array with one different character', () => {
      expect(
        getCommonLettersFromElementsWithOneDifferentCharacter(letters),
      ).toEqual('fgij');
    });
  });
});
