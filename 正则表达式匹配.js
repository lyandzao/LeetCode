var isMatch = function(s, p) {
  return new RegExp(['^', ...p, '$'].join('')).test(s);
};
console.log(isMatch('aa', '.*'));
