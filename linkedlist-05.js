// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
    const tmp = head;
    let current = head;
    let prev = null;
    let counter = 0;

    if (position === 0) {
        head = current.next;
        return head;
    }
    while (current && counter < position) {
        prev = current;
        current = current.next;
        counter++;
    }

    prev.next = current.next;

    return tmp;
}


