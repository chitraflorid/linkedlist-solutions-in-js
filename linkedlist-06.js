// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    if (!head || !head.next) {
        return head;
    }

    let prev = null;
    let current = head;

    while (current) {
        const tmp = current.next;
        
        current.next = prev;
        
        prev = current;
        current = tmp;
    }

    head = prev;

    let node = head;
    while (node != null) {
        console.log(node.data);

        node = node.next;
    }

}


