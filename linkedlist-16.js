/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curr = head;
    let count = 0;
    const nodeList = [];
    
    if (!curr.next) {
        return curr;
    }
    
    while (curr !== null) {
      nodeList[count] = curr;
      curr = curr.next;
      count++;
    }
    
    return nodeList[Math.floor(count / 2)];
};
