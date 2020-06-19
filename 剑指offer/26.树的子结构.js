/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  return (A !== null && B !== null) && (dfsIsEquality(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

function dfsIsEquality(A, B) {
  if (B === null) return true
  if (A === null || A.val !== B.val) return false
  return dfsIsEquality(A.left, B.left) && dfsIsEquality(A.right, B.right)
}