/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g,'[.]')
};
console.log(defangIPaddr('1.1.1.1'))
