/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 思路1：递归
 * 思路2：辅助栈
 */
// var mirrorTree = function (root) {
//   if (root === null) return null
//   // 暂存左子树节点
//   let temp = root.left
//   root.left=root.right
//   root.right = temp
//   mirrorTree(roo.left)
//   mirrorTree(roo.right)
//   return root
// };
var mirrorTree = function (root) {
  if (root === null) return null
  let stack = [root]
  while (stack.length) {
    let node = stack.shift()
    if (node.left !== null) stack.push(node.left)
    if (node.right !== null) stack.push(node.right)
    let temp = node.left
    node.left = node.right
    node.right = temp
  }
  return root
};