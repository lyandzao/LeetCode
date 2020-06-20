/**
 * @param {string} s
 * @return {string[]}
 * 思路：全排列,回溯剪枝
 * 
 */
var permutation = function (s) {
  let arr = s.split('')
  let res = []
  permute(0)
  return res
  function permute(x) {
    if (x === arr.length - 1) {
      res.push(arr.join(''))
      return
    }
    let set = new Set()
    for (let i = x; i < arr.length; i++) {
      if (set.has(arr[i])) continue
      set.add(arr[i])
      swap(i, x)
      permute(x + 1)
      swap(i, x)
    }
  }
  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
};

console.log(permutation('abc'))
