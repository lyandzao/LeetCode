/**
 * @param {number[]} nums
 * @return {number}
 * 思路1：动态规划
 * 思路1:原地动态规划
 */
// var maxSubArray = function (nums) {
//   const dp = []
//   let res = (dp[0] = nums[0])
//   for (let i = 0; i < nums.length; i++) {
//     dp[i] = nums[i]
//     if (dp[i - 1] > 0) {
//       dp[i] += dp[i - 1]
//     }
//     res = Math.max(res, dp[i])
//   }
//   return res
// };
var maxSubArray=function (nums) {
  let res=nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0)
    res=Math.max(res,nums[i])
  }
  return res
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
