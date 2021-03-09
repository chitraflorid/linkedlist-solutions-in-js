/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let count = 1;
    let next = null;
    let curr = head;
    let leftP = curr;
    let mP = null;
    let prev = null;
    if (head === null || m > n) return null;
    
    while (curr !== null && count <= n) {
        if (count >= m) {
            if (count === m) {
                leftP = prev;
                mP = curr;
            }
            
            const tmp = curr.next;
            
            curr.next = next;
        //    prev = curr;
            next = curr;
            curr = tmp;
        } else {
            prev = curr;
            curr = curr.next;
        }
        
        count++;
    }
    
    if (leftP !== null) {
     leftP.next = next;
    } else {
        head = next;
    }
     
    mP.next = curr;

    return head;
};
