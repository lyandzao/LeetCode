/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * 思路：中序遍历
 */
var treeToDoublyList = function (root) {
  if (!root) return null
  let head=null
  let pre=null
  dfs(root)
  head.left = pre
  pre.right = head
  return head
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (pre) {
      pre.right = node
    } else {
      head = node
    }
    node.left = pre
    pre = node
    dfs(node.right)
  }
};

