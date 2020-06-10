/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 前序遍历:根左右
 * 中序遍历:左根右
 * 后续遍历:左右根
 * 思路:
 * 根据前序遍历找到根，再通过根找到左子树的前序遍历，中序遍历
 * 通过根找到右子树的前序遍历，中序遍历
 * 递归上述过程
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null
  }
  let root = new TreeNode(preorder[0])
  let rootIndex = inorder.findIndex(item => item === preorder[0])
  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
  root.right = buildTree(preorder.slice(rootIndex + 1, preorder.length), inorder.slice(rootIndex + 1, inorder.length))
  return root
};