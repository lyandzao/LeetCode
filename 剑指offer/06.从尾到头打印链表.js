/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * 队列存储，简单的链表操作，没什么好说的
 */
var reversePrint = function (head) {
  let temp=head
  let res=[]
  while (temp) {
    res.unshift(temp.val)
    temp=temp.next
  }
  return res
};
