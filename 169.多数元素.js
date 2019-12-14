/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let snapArr = {}
  let max
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (!snapArr.hasOwnProperty(ele)) {
      snapArr[ele]=1
    } else {
      snapArr[ele]++
    }
  }
  for (const key in snapArr) {
    if (snapArr.hasOwnProperty(key)) {
      const element = snapArr[key];
      if (!max) {
        max=key
      }
      if (element > snapArr[max]) {
        max=key
      }
    }
  }
  return max
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
