/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 思路：回溯剪枝
 */
var exist = function (board, word) {
  let wordArr = [...word]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, wordArr, i, j, 0)) return true
    }
  }
  return false
  function dfs(board, word, i, j, k) {
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== word[k]) return false
    if (k === word.length - 1) return true
    let temp = board[i][j]
    board[i][j] = '/'
    let res = dfs(board, word, i + 1, j, k + 1) ||
      dfs(board, word, i - 1, j, k + 1) ||
      dfs(board, word, i, j + 1, k + 1) ||
      dfs(board, word, i, j - 1, k + 1)
    board[i][j] = temp
    return res
  }
};


let testData = [
  ["a", "b", "c", "e"],
  ["s", "f", "c", "s"],
  ["a", "d", "e", "e"]]

console.log(exist(testData, 'abcced'))
