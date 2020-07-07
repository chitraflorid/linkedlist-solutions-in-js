// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    if (!head || !head.next) {
        return head;
    }

    const listHash = {};
    let current = head;
    let tmp = current;

    while (current) {
        while(current.next && current.data === current.next.data) {
            current.next = current.next.next;
        }
        current = current.next;
    }

   return tmp;
}


