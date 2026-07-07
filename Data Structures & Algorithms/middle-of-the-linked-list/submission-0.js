/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head) {
        let end = head, mid = head;
        while (end != null && end.next != null) {
            mid = mid.next;
            end = end.next.next;
        }
        return mid;
    }
}
