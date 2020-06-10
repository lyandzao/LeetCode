/**
 * @param {number[]} nums
 * @return {number}
 * 主要思路就是用set集合，没什么好说的
 */
var findRepeatNumber = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
    } else {
      return nums[i]
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
