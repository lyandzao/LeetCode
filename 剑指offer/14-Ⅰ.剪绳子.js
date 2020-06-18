/**
 * @param {number} n
 * @return {number}
 * 思路1：贪心
 * 尽可能的拆分成3
 * 思路2：动态规划
 * 
 */
// var cuttingRope = function (n) {
//   if (n === 2) return 1
//   if (n === 3) return 2
//   // 能拆分成3的个数
//   let nums_3 = Math.floor(n / 3)
//   // 余数
//   let remainder = n % 3
//   if (remainder === 0) return 3 ** nums_3
//   if (remainder === 1) return 3 ** (nums_3 - 1) * 4
//   return 3**nums_3*2
// };

var cuttingRope = function (n) {
  // dp[i]表示绳子长为i的最大乘积
  let dp = new Array(n + 1).fill(1)
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i]=Math.max(dp[i],j*(i-j),j*dp[i-j])
    }
  }
  return dp[n]
}

console.log(cuttingRope(2))
console.log(cuttingRope(10))
