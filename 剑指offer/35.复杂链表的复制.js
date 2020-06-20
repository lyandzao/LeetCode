/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * 思路：hash映射
 * 第一次遍历，复制每个节点和 next 指针，并且保存“原节点-复制节点”的映射关系
 * 第二次遍历，通过哈希表获得节点对应的复制节点，更新 random 指针
 */
var copyRandomList = function (head) {
  if (!head) return null
  const map = new Map()
  let cur = head
  const newHead = new Node(cur.val)
  let newCur = newHead
  map.set(cur, newCur)
  while (cur.next) {
    newCur.next = new Node(cur.next.val)
    cur = cur.next
    newCur = newCur.next
    map.set(cur, newCur)
  }
  newCur = newHead
  cur = head
  while (newCur) {
    newCur.random = map.get(cur.random);
    newCur = newCur.next
    cur = cur.next
  }
  return newHead
};
