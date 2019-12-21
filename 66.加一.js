/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let length;
  if (digits.length === 1) {
    if (digits[0] === 9) {
      return [1, 0];
    } else {
      return [digits[0]+1]
    }
  } else {
    length = digits.length - 1;
    for (let i = length; i >=0; i--) {
      if (digits[i] === 9 && i > 0) {
        digits[i] = 0;
        continue;
      } else if (digits[i] === 9 && i === 0) {
        digits.splice(i, 1, 1, 0);
        return digits;
      } else {
        digits[i] += 1;
        return digits;
      }
    }
  }
};
console.log(plusOne([9,9,9]));
