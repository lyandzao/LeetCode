/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 0) {
    let _x = -parseInt([...x.toString()].reverse().join(''));
    return _x > Math.pow(-2, 31) ? _x : 0;
  }
  if (x > 0) {
    let _x_ = parseInt([...x.toString()].reverse().join(''));
    return _x_ < Math.pow(2, 31) - 1 ? _x_ : 0;
  }
  return 0;
};
console.log(reverse(123));

