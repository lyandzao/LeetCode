/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 思路1：dfs
 * 主要是判断边界
 * 思路2：bfs
 * 判断边界，理解bfs的实现
 */
// var movingCount = function (m, n, k) {
//   let visited = new Set()
//   dfs(0, 0)
//   return visited.size
//   function dfs(i, j) {
//     if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || sum(i) + sum(j) > k || visited.has(`${i}-${j}`)) return
//     visited.add(`${i}-${j}`)
//     dfs(i + 1, j)
//     dfs(i - 1, j)
//     dfs(i, j + 1)
//     dfs(i, j - 1)
//   }
// };

var movingCount = function (m, n, k) {
  let visited = new Set()
  let queue = [[0, 0]]
  bfs()
  return visited.size
  function bfs() {
    while (queue.length) {
      let [i, j] = queue.shift()
      if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || sum(i) + sum(j) > k || visited.has(`${i}-${j}`)) continue
      visited.add(`${i}-${j}`)
      queue.push([i+1,j],[i,j+1])
    }
  }
}

function sum(n) {
  let res = 0;
  while (n) {
    res = res + (n % 10);
    n = Math.floor(n / 10);
  }
  return res;
}

console.log(movingCount(2, 3, 1))
console.log(movingCount(3, 1, 0))


