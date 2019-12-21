/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = strs[0];
  let strArr = str.split('');
  let matchStr = strArr[0];
  for (let i = 1; i < strs.length; i++) {
    const ele = strs[i];
    if (ele.includes(matchStr)) {
      if (i === strs.length - 1) {
        matchStr += strArr[1];
      }
      continue;
    } else {
      return arr;
    }
  }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
