/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  function romaMapToNumber(number) {
    switch (number) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        break;
    }
  }
  let stringNumberArray = [...s];
  let result = 0;
  for (let i = 0; i < stringNumberArray.length; i++) {
    romaMapToNumber(stringNumberArray[i]) <
    romaMapToNumber(stringNumberArray[i + 1])
      ? (result -= romaMapToNumber(stringNumberArray[i]))
      : (result += romaMapToNumber(stringNumberArray[i]));
  }

  return result
}
