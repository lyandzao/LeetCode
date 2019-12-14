/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let result = [];
  if (nums.length === 1) {
    return [nums];
  } else {
    let preResult = permute(nums.slice(1));
    for (let j = 0; j < preResult.length; j++) {
      for (let k = 0; k < preResult[j].length + 1; k++) {
        let temp = preResult[j].slice(0, k) + nums[0] + preResult[j].slice(k);        
        result.push(temp);
      }
    }
    return unique(result);
  }
};

function unique (arr) {  
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (ret.indexOf(item) === -1) {
      ret.push(item);
    }
  }
  return ret;
}

console.log(permute([1, 2, 3]));
