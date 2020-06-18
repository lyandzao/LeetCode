/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!p) return !s;
  if (p[1] == '*') {
    return isMatch(s, p.substr(2)) || (s && (s[0] == p[0] || p[0] == '.')) && isMatch(s.substr(1), p);
  } else {
    return s && (s[0] == p[0] || p[0] == '.') && (isMatch(s.substr(1), p.substr(1)));
  }
};

console.log(isMatch('aa','a')) // f
console.log(isMatch('ab','.*')) // t
console.log(isMatch('aab','c*a*b')) // t

