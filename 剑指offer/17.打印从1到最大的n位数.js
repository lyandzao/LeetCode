/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let min=0
  let max=10**n-1
  let res=[]
  while (res.length<max) {
    res.push(++min)
  }
  return res
};

console.log(printNumbers(1))
console.log(printNumbers(2))
console.log(printNumbers(3))