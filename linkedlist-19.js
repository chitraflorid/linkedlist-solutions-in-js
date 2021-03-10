/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let curr = head;
    const nodeList = [];
    
    while (curr) {
        nodeList.push(curr);
        curr = curr.next;
    }
    
    const len = nodeList.length - 1;
    
    for (let indx = 0; indx <= len; indx++) {
        const nxtIndx = len - indx;
        
        if (indx >= nxtIndx) { 
            nodeList[indx].next = null; 
            break; 
        }

        
        nodeList[indx].next = nodeList[nxtIndx];
        nodeList[nxtIndx].next = nodeList[indx + 1];
    }

   return head;
};
