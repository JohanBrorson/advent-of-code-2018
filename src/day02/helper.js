function hasLettersRepeatedTwoOrThreeTimes(letters) {
  var unique = letters.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});

  var containsTwo = Object.values(unique).includes(2) ? 1 : 0;
  var containsThree = Object.values(unique).includes(3) ? 1 : 0;

  return [containsTwo, containsThree];
}

function sumElementsAtSameIndex(array) {
  return array.reduce(([a, b], [c, d]) => [a + c, b + d], [0, 0]);
}

function multiplyElements(array) {
  return array.reduce((a, b) => a * b);
}

function getChecksum(array) {
  return multiplyElements(
    sumElementsAtSameIndex(
      array.map((letters) => hasLettersRepeatedTwoOrThreeTimes(letters)),
    ),
  );
}

function getCommonLetters(str1, str2) {
  var commonLetters = '';
  str1.split('').forEach((c, i) => {
    if (str2[i] === c) commonLetters += c;
  });
  return commonLetters;
}

function getCommonLettersFromElementsWithOneDifferentCharacter(array) {
  var commonLetters;
  while (array.length && commonLetters === undefined) {
    var currentElement = array.shift();
    array.some((element) => {
      var letters = getCommonLetters(currentElement, element);
      if (currentElement.length - letters.length === 1) {
        commonLetters = letters;
        return true;
      }
    });
  }
  return commonLetters;
}

module.exports = {
  hasLettersRepeatedTwoOrThreeTimes,
  sumElementsAtSameIndex,
  multiplyElements,
  getChecksum,
  getCommonLetters,
  getCommonLettersFromElementsWithOneDifferentCharacter,
};
