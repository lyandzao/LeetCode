/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 思路：层序遍历
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let temp = queue.shift()
    res.push(temp.val)
    temp.left && queue.push(temp.left)
    temp.right && queue.push(temp.right)
  }
  return res
};