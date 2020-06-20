/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 * 思路：回溯
 */
var pathSum = function (root, sum) {
  let res = []
  let path = []
  dfs(root, sum, path, res)
  return res
};
function dfs(root, tar, path, res) {
  if (!root) return
  path.push(root.val)
  tar = tar - root.val
  if (tar === 0 && !root.left && !root.right) {
    res.push([...path])
  }
  dfs(root.left, tar, path, res)
  dfs(root.right, tar, path, res)
  path.pop()
}