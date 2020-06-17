/**
 * @param {number} n
 * @return {number}
 * 思路1:动态规划
 * 思路二:公式推算
 */
var fib = function (n) {
  /**
   * 动态规划
   */
  //   let dp = [0, 1]
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
  if (n === 0) return 0
  if (n === 1) return 1
  let res = [0, 1, 1]
  while (res.length <= n) {
    res.push(res.slice(-2).reduce((i, j) => i + j) % 1000000007)
  }
  return res.pop()
};

console.log(fib(5))
