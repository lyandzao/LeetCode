/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (nums.indexOf(ele) !== i) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
