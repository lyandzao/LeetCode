/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 思路：辅助栈
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  let i = 0
  for (const pushedItem of pushed) {
    stack.push(pushedItem)
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  }
  return !!!stack.length
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
