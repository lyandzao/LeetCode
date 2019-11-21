/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return [...x.toString()].toString() === [...x.toString()].reverse().toString()
    ? true
    : false;
}
