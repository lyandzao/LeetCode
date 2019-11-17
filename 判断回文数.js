var isPalindrome = function (x) {
  return [...x.toString()].toString() === [...x.toString()].reverse().toString()
    ? true
    : false;

};

console.log(isPalindrome(121))
