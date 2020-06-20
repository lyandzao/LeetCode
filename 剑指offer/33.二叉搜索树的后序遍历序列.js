/**
 * @param {number[]} postorder
 * @return {boolean}
 * 思路：递归
 * 1.后序遍历：左右根
 * 2.二叉搜索树：
 *   1.左子树所有节点小于根
 *   2.右子树所有节点大于根
 */
var verifyPostorder = function (postorder) {
  let len = postorder.length
  if (len < 2) return true
  let root = postorder[len - 1]
  let boundary = 0
  while (postorder[boundary] < root && boundary < len - 1) {
    boundary++
  }
  while (boundary < len - 1) {
    boundary++
    if (postorder[boundary] < root) return false
  }
  return verifyPostorder(postorder.slice(0, boundary)) &&
    verifyPostorder(boundary, len - boundary - 1)
};