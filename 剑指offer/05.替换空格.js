/**
 * @param {string} s
 * @return {string}
 * 思路:
 * 1. 分割字符串然后数组处理
 * 2. 双指针，性能好一些
 * 3. 正则匹配替换，性能最好
 */
var replaceSpace = function (s) {
  // return s.replace(/ /,'%20')
  // return s.split(' ').join('%20')
  let len = s.length
  let space = 0
  for (let i = 0; i < len; i++) {
    const ele = s.charAt(i)
    if (ele === ' ') {
      space += 1
    }
  }
  let resArrLen = len + space * 2
  let resArr = new Array(resArrLen)
  // 双指针指向两个数组的末尾
  let p1 = len - 1, p2 = resArrLen - 1
  for (let i = p1; i >= 0; i--) {
    let tar = s.charAt(i)
    if (tar !== ' ') {
      resArr[p2] = tar
      p2--
    } else {
      resArr[p2--] = '0'
      resArr[p2--] = '2'
      resArr[p2--] = '%'
    }
  }
  return resArr.join('')
};

let testStr = "We are happy."
console.log(replaceSpace(testStr))
