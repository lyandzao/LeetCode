/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 思路1：排序
 * 思路2：大堆
 */
var getLeastNumbers = function (arr, k) {
  return quickSort(arr).slice(0, k)
};
function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pavotIndex = arr.length >> 1
  const pivot = arr.splice(pavotIndex,1)[0]
  const left = [], right = []
  arr.forEach(num => {
    num < pivot ? left.push(num) : right.push(num)
  });
  return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(getLeastNumbers([3, 2, 1], 2))
console.log(getLeastNumbers([0, 1, 2, 1], 1))
