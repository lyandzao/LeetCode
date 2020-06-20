/**
 * @param {number[]} nums
 * @return {number}
 * 思路1：摩尔投票法
 * 思路2：hash表统计
 */
var majorityElement = function (nums) {
  let votes = 0
  let x = 0
  let count = 0
  for (const num of nums) {
    if (votes === 0) x = num
    votes += num === x ? 1 : -1
  }
  // 验证x是否为众数
  for (const num of nums) {
    if (num === x) count++
  }
  return count > nums.length >> 1 ? x : 0
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
