/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => {
    let num1 = a + '' + b
    let num2 = b + '' + a
    return num1 - num2
  }).join('')
};

console.log(minNumber([10, 2]))
console.log(minNumber([3, 30, 34, 5, 9]))