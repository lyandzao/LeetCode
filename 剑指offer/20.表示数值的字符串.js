/**
 * @param {string} s
 * @return {boolean}
 * 思路1：js的isNaN自动转换数字
 * 思路2：有限状态自动机
 */
var isNumber = function (s) {
  return !s.trim() ? false : !isNaN(s)
};

console.log(isNumber('+100'))
console.log(isNumber('5e2'))
console.log(isNumber('-123'))
console.log(isNumber('3.1416'))
console.log(isNumber('0123'))
console.log('------------------')
console.log(isNumber('12e'))
console.log(isNumber('1a3.14'))
console.log(isNumber('1.2.3'))
console.log(isNumber('+-5'))
console.log(isNumber('-1E-16'))
console.log(isNumber('12e+5.4'))
