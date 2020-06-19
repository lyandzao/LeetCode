/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路1：开辟新数组
 * 思路2：双指针
 * 从两端开始，进行交换和指针移动
 */
var exchange = function (nums) {
  // let a=[],b=[]
  // nums.forEach(item => item % 2 ? a.push(item) : b.push(item))
  // return [...a,...b]
  let p1 = 0, p2 = nums.length - 1
  while (p1 <= p2) {
    if (nums[p1] % 2) {
      p1 += 1
      continue
    }
    if (!(nums[p2] % 2)) {
      p2 -= 1
      continue
    }
    [nums[p1], nums[p2]] = [nums[p2], nums[p1]]
    p1 += 1
    p2 -= 1
  }
  return nums
};

console.log(exchange([1, 2, 3, 4]))

