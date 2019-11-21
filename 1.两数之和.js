/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    const j = nums.findIndex((item, index) => {
      if (item === target - ele && index !== i) {
        return true;
      }
    });
    if (j !== -1) {
      return [i, j];
    }
  }
};
twoSum([3, 2, 4], 6);
