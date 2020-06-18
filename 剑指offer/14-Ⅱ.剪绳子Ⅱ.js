/**
 * @param {number} n
 * @return {number}
 * 思路：贪心
 * bigInt取模
 */
var cuttingRope = function (m) {
  let n = BigInt(m)
  if (n === 2n) return 1n
  if (n === 3n) return 2n
  let mod = 1000000007n
  // 能拆分成3的个数
  let nums_3 = n / 3n
  // 余数
  let remainder = n % 3n
  if (remainder === 0n) return 3n ** nums_3 % mod
  if (remainder === 1n) return 3n ** (nums_3 - 1n) * 4n % mod
  return 3n ** nums_3 * 2n % mod
};

console.log(cuttingRope(120))
