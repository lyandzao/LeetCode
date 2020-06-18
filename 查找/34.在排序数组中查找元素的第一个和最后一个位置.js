/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路：二分法
 * 就在原来的基础上，从发现值左右扩展
 */
var searchRange = function (nums, target) {
  let len = nums.length
  let l = 0, r = len - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (target > nums[mid]) {
      l = mid + 1
    } else if (target < nums[mid]) {
      r = mid - 1
    } else {
      l = r = mid
      while (nums[l] === nums[l - 1]) l--
      while (nums[r] === nums[r + 1]) r++
      return [l, r]
    }
  }
  return [-1, -1]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))