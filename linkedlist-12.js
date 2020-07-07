// Complete the sortedInsert function below.

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
function sortedInsert(head, data) {
    const node = new DoublyLinkedListNode(data);

    if (!head) {
        return node;
    }

    let current = head;
    let currentHead = head;
    let prev = head.prev;
    let inserted = false;

    while (current && !inserted) {
        if (data < current.data) {
            if (prev) {
             current.prev.next = node;
            } else {
                currentHead = node;
            }

            current.prev = node;
            node.next = current;
            inserted = true;
        } 

       prev = current; 
       current = current.next;
    }

   if (!inserted) {
       prev.next = node;
       node.prev = prev;
   }
    

    return currentHead;

}

