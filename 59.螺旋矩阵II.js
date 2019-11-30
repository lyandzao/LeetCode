/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = []
  let num=1
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (j < n - 1) {
        arr[i][j] = num
        num+=1
      }
      if (j === n - 1) {
        arr[j][i]=num
        num+=1
      }
    }
  }
  console.log(arr)
  
};
generateMatrix(3)