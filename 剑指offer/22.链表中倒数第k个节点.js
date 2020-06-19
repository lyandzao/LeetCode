/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 思路：快慢指针
 */
var getKthFromEnd = function (head, k) {
  let p1 = head, p2 = head
  let count = 0
  while (p1) {
    if (count >= k) {
      p2 = p2.next
    }
    p1 = p1.next
    count++
  }
  return count < k ? null : p2
};