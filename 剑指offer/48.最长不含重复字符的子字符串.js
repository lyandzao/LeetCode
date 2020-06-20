/**
 * @param {string} s
 * @return {number}
 * 思路：滑动窗口+hash表
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0, r = 0, ret = 0
  let window = new Map()
  while (r < s.length) {
    if (window.has(s[r]) && window.get(s[r]) >= l) {
      l = window.get(s[r]) + 1
    }
    ret = Math.max(r - l + 1, ret)
    window.set(s[r], r)
    r++
  }
  return ret
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
