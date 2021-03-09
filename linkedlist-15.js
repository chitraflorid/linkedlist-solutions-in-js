/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const nodeList = [];
    let curr = head;
    let i = j = 0;
    
    while (curr !== null) {
        nodeList.push(curr.val);
        curr = curr.next;
    }
            
    j = nodeList.length - 1;
    while (i < j) {
        if (nodeList[i] !== nodeList[j]) return false;
        i++;
        j--;
    }
    
    return true;
};
