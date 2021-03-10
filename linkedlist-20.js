/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    const nodeList = [];
    
    while (curr) {
        nodeList.push(curr);
        curr = curr.next;
    }
    
    const targetIndx = nodeList.length - n;
    
    if (targetIndx === 0) {
        return  nodeList[targetIndx].next;
    }
    
    nodeList[targetIndx - 1].next = nodeList[targetIndx].next;
    
    return head;
};
