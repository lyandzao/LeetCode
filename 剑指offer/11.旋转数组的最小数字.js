/**
 * @param {number[]} numbers
 * @return {number}
 * 思路1: 排序
 * 思路2: 双指针，二分法
 * 当中间值大于最右值，说明最小值一定出现在中间值到最右值中间
 * 当中间值小于最左值，说明中间值之前出现了断崖，最小值在最右值到中间值中间
 */
var minArray = function (numbers) {
  // return numbers.sort((a,b)=>a-b)[0]
  let len = numbers.length
  let l = 0, r = len - 1
  while (l < r) {
    let mid = (l + r) >> 1
    let midValue = numbers[mid]
    if (midValue > numbers[r]) {
      l = mid + 1
    } else if (midValue < numbers[l]) {
      r = mid
    } else {
      r -= 1
    }
  }
  return numbers[l]
};

console.log(minArray([3, 4, 5, 1, 2])) // 1
console.log(minArray([2, 2, 2, 0, 1])) // 0
console.log(minArray([3, 1, 3])) // 1

