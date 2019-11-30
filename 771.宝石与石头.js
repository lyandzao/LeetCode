/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let arrJ = J.split('')
  let arrS=S.split('')
  let num=0
  for (const i of arrS) {
    for (const j of arrJ) {
      if (i === j) {
        num+=1
      }
    }
  }
  return num
};
numJewelsInStones('aA','aAAbbbb')