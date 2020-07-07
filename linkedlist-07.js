// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
    if (!head || !head.next) {
        return head;
    }

    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;

        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;

}


