/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  function isMatch(a, b) {
    if (a === '(' && b === ')') {
      return true;
    } else if (a === '[' && b === ']') {
      return true;
    } else if (a === '{' && b === '}') {
      return true;
    } else {
      return false;
    }
  }
  let stack = [];
  let arr = s.split('');

  if (arr.length % 2 === 0) {
    if (arr.length===0) {

      
      return true;
    }
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      if (ele === '(' || ele === '[' || ele === '{') {
        if (i === arr.length - 1) {
          return false
        }
        stack.push(ele);
      } else {
        if (isMatch(stack.pop(), ele)) {
          if (i === arr.length - 1) {
            return true;
          } else {
            continue;
          }
        } else {
          return false;
        }
      }
    }
  } else {

    return false;
  }
};
console.log(isValid('(('));
