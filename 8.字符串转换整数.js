/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let sstr = str.replace(/(^\s*)/, '');
  let snapStr = [...sstr];
  let snapArr;
  if (!/^[-|\+|^\d]/.test(snapStr[0]) || /^[-|\+][^\d]+/.test(sstr)) {
    return 0;
  } else if ((snapStr[0] == '+' || snapStr[0] == '-')&&snapStr.length==1) {
    return 1;
  } else {
    snapArr = parseInt(snapStr.join(''));
    console.log(snapArr);

    if (Math.pow(-2, 31) < snapArr && snapArr < Math.pow(2, 31) - 1) {
      return snapArr;
    } else if (snapArr >= Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else if (snapArr <= Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    }
  }
};
console.log(myAtoi('42'));
