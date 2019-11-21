/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  function sum(arr) {
    let arrSum = 0;
    for (const i of arr) {
      arrSum+=i
    }
    return arrSum
  }
  function find(params) {
    
  }
  let snapStack=[]
  for (let i = 0; i < nums.length-3; i++) {
    const eleH = nums[i];
    snapStack.push(eleH)
    for (let j = i+1; j < nums.length-1; j++) {
      const ele = nums[j];
      if (i < i + 4) {
        snapStack.push(ele)
      }
      if (i = i + 4) {
        break
      }
    }
    if (sum(snapStack) !== target) {
      snapStack.pop()

    }
  }
};
fourSum([1, 0, -1, 0, -2, 2],0);
