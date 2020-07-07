
// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    const node = new SinglyLinkedListNode(data);
    if (!head) {
        return node;
    }
    const tmp = head;
    let current = head;
    let counter = 0;
    let prev = null;
 
    while (current && counter < position) {
        prev = current;
        current = current.next;
        counter++;
    }

    prev.next = node;
    node.next = current;

    return tmp;
}


