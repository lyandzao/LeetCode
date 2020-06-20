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
 * 思路1：层序遍历
 * 在打印每一层的时候判断奇偶层，然后决定是push还是unshift
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  let level = 0
  while (queue.length) {
    let temp = []
    let len = queue.length
    level++
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      level % 2 ? temp.push(node.val) : temp.unshift(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp)
  }
  return res
};