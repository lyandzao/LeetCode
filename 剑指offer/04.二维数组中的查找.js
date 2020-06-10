/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 观察规律，双指针控制走向
 */
var findNumberIn2DArray = function (matrix, target) {
  let len = matrix.length
  if (!len) return false
  let rowLen = matrix[0].length
  if (!rowLen) return false
  let r = 0, c = rowLen - 1
  while (r < len && c >= 0) {
    let temp = matrix[r][c]
    if (temp > target) {
      c--
    } else if (temp < target) {
      r++
    } else {
      return true
    }
  }
  return false
};

let testArr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

findNumberIn2DArray(testArr, 5)
findNumberIn2DArray(testArr, 20)