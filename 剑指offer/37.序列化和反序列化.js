/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 思路：层序遍历
 */
var serialize = function (root) {
  if (!root) return '[]'
  let queue = [root]
  let res = []
  while (queue.length) {
    let node = queue.shift()
    if (node) {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      res.push('null')
    }
  }
  return `[${res.toString()}]`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * 思路：层序遍历
 */
var deserialize = function (data) {
  if (data.length <= 2) return null
  let arr = data.slice(1, -1).split(',')
  let root = new TreeNode(Number(arr[0]))
  let queue = [root]
  let i = 1
  while (queue.length) {
    let node = queue.shift()
    if (arr[i] !== 'null') {
      node.left = new TreeNode(Number(arr[i]))
      queue.push(node.left)
    }
    i++
    if (arr[i] !== 'null') {
      node.right = new TreeNode(Number(arr[i]))
      queue.push(node.right)
    }
    i++
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(`[1,2,null,3]`.slice(1, -1).split(',').map(i => i === 'null' ? i : Number(i)))

