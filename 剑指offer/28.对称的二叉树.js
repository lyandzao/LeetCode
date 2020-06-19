/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
 return root===null?true:traverse
};

function traverse(a, b) {
  if (a === null && b === null) return true
  if (a === null || b === null || a.val !== b.val) return false
  return traverse(a.left, b.right) && traverse(a.right, b.left)
}