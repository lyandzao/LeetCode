/**
 * @param {number} n
 * @return {string[][]}
 * 思路：回溯
 * 1.创建一个n*n的棋盘
 * 2.回溯遍历棋盘
 *   (1)如果最后一个皇后已经被安排到最后一排，便把此解法放入res
 *   (2)遍历每一行的每一个元素，检查当前元素的对角线和所在行列是否冲突
 *   (3)如果冲突回到上一个状态，重复2过程
 */
var solveNQueens = function (n) {
  // 1.创建棋盘
  let board = new Array(n).fill(null).map(() => new Array(n).fill('.'))
  let res = []
  backTrace(board, 0, res)
  function backTrace(board, row, res) {
    let len = board.length
    if (len === row) { // 判断最后一个皇后已经被安排到最后一排
      // 创建棋盘的临时副本，此为解
      let temp = board.map(item => item.join(''))
      res.push(temp)
      return
    }
    for (let col = 0; col < board[0].length; col++) {
      if (check(board, row, col)) { // 检查冲突
        board[row][col] = 'Q'
        backTrace(board, row + 1, res)
        board[row][col] = '.'
      }
    }
  }
  function check(board, row, col) {
    // 判断同一列是否有queen
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false
    }
    // 判断同一行是否有queen
    for (let j = 0; j < col; j++) {
      if (board[row][j] === 'Q') return false
    }
    // 判断对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }
    // 判断对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < board[0].length; i--, j++) {
      if (board[i][j] === 'Q') return false
    }
    return true
  }
  return res
};

console.log(solveNQueens(4))
