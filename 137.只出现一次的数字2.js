/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let arr = nums.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        arr.splice(i,3,'')
    }
  }
  return arr.join('')
};
console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]));
