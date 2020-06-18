/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 思路：快速幂，二分指数
 */
var myPow = function (x, n) {
  const isNegative = n < 0; // 是否是负指数
  const res = absMyPow(x, Math.abs(n));
  return isNegative ? 1 / res : res;
};

function absMyPow(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  const res = absMyPow(base, Math.floor(exponent / 2));
  return exponent % 2 ? res * res * base : res * res;
}



console.log(myPow(-2.00000, 9))
console.log(myPow(2.10000, 3))
console.log(myPow(2, -2))




