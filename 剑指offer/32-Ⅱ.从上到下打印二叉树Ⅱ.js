/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路：层序遍历
 * 在循环时对每层进行处理
 */
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let temp = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp)
  }
  return res
};