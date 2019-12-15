/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a=0
  nums.forEach(item => {
     a=a^item
  })
  return a
};
console.log(singleNumber([1, 1, 3, 2, 2]));
