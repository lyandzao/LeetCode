/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let snapArr = [...p]
  for (let i = 0; i < snapArr.length; i++) {
    const ele = snapArr[i];
    if (ele === '*') {
      snapArr.splice(i,1,'\\w*')
    }
    if (ele === '?') {
      snapArr.splice(i,1,'\\w')
    }
  }
  return new RegExp(`^${ snapArr.join('').toString()}$`).test(s)
  // console.log(snapArr.join(''))
  // console.log(`/^${p.replace(/\*/g, '\\w*').replace(/\?/g, '\\w[1]')}$/`);
  
  // return new RegExp(`^${ p.replace(/\*/g, '\\w*').replace(/\?/g, '\\w[1]') }$`).test(s);
};
console.log(isMatch('abb', '?*'));
console.log(/^\w\w*$/.test('aa'));

