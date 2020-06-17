/**
 * @param {number} n
 * @return {number}
 * f(n)=f(n-1)+f(n-2)
 * 思路和斐波那契数列一样
 */
var numWays = function (n) {
  /**
 * 动态规划
 */
  //   let dp = [0, 1, 2]
  //   const f = (n) => {
  //     if (dp[n] !== undefined) {
  //       return dp[n]
  //     }
  //     dp[n] = f(n - 1) + f(n - 2)
  //     return dp[n] % 1000000007
  //   }
  //   return f(n)

  /**
   * 公式推演
   */
  if (n === 0) return 1
  if (n === 1) return 1
  let res = [0, 1, 2]
  while (res.length <= n) {
    res.push(res.slice(-2).reduce((i, j) => i + j) % 1000000007)
  }
  return res.pop()
};

console.log(numWays(7))