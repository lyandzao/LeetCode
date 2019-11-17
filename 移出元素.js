var removeElement = function (nums, val) {
  // nums.forEach((element,index) => {
  //   if (element === val) {
  //     nums.splice(index, 1)
  //     i--
  //   }
  // });
  // return nums
  return nums.filter(x=>x!==val)
};
console.log(removeElement([3,2,2,3], 3));
