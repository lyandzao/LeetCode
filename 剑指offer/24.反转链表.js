/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 思路：原地反转
 */
var reverseList = function (head) {
  let pre = null, cur = head, next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};