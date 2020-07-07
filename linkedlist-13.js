// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
    if (!head || !head.next) {
        return head;
    }

    let current = head;
    let tmp = head;
    let prev = head.prev;

    while (current) {
        current.prev = current.next;
        current.next = prev;

        prev = current;
        current = current.prev;
    }

    return prev;

}


