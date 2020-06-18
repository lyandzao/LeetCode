/**
 * @param {number} n - a positive integer
 * @return {number}
 * 思路1：转换成字符串操作统计个数
 * 思路2：位运算
 */
// var hammingWeight = function (n) {
//   return n.toString(2).split('').reduce((prev, cur) => {
//     if (cur === '1') {
//       prev += 1
//     }
//     return prev
//   }, 0)
// };

// var hammingWeight=function (n) {
//   let count=0
//   while (n!==0) {
//     // 一个数和它减1的数的与操作会消除数1右边的二进制数
//     n = n & (n - 1)
//     count++
//   }
//   return count
// }

var hammingWeight = function (n) { 
  let count = 0
  let flag=1
  while (flag) {
    // 如果有1
    if (n & flag) {
      count++
    }
    flag=flag<<1
  }
 return count
}

console.log(hammingWeight(00000000000000000000000000001011))
