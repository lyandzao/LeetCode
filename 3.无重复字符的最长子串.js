/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxStringArr = [];
  let maxNum = 0;
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    const ele2 = s[i - 1];
    if (ele !== ele2) {
      if (!maxStringArr.includes(ele)) {
        maxStringArr.push(ele);
        console.log('true', maxStringArr); 
        if (i === s.length - 1) {
          maxNum = maxStringArr.length;
          maxStringArr = [];
        }
      }
    } else {

      console.log('false', maxStringArr);
      if (maxStringArr.length > maxNum) {
        maxNum = maxStringArr.length;
      }
      maxStringArr = [];
    }
  }
  return maxNum;
};

console.log(lengthOfLongestSubstring('aab'));
