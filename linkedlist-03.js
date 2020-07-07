// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    const current = head;
    const node = new SinglyLinkedListNode(data);
    
    if (current) {
        node.next = current;
    }

    return node;

}


