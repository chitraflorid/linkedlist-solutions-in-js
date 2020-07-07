

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    if (!head.next) {
        return head.data;
    } 
    
    let current = head;
    const listData = [];
    
    while (current) {
        listData.push(current.data);
        current = current.next;
    }

    const len = listData.length;
    return listData[ len - 1 -positionFromTail];
}
