/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const nodeList = new Set();
    let curr = head;
    
    while (curr !== null) {
        if (nodeList.has(curr)) {
            return true;
        }
       
        nodeList.add(curr, 1);
        curr = curr.next;
    }
    
    return false;
};
