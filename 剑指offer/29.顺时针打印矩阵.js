/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 思路：模拟路径
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let row = matrix.length - 1
  let col = matrix[0].length - 1
  let top = 0, right = col, bottom = row, left = 0
  let res = []
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++)  res.push(matrix[top][i])
    top++
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--
    // 处理只有一行或者一列的情况
    if (top > bottom || left > right) break
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++
  }
  return res
};

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]))
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]]))
