
// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if (!head1 && !head2) {
        return null;
    }


    let current1 = head1;
    let current2 = head2; 
    let newList = new SinglyLinkedListNode(0);
    let tmp = newList;


    while (current1 && current2) {
        if (current1.data <= current2.data) {
            newList.next = current1;
            current1 = current1.next;
        } else {
            newList.next = current2;
            current2 = current2.next;
        }

        newList = newList.next;
    }

    if (!current1 && current2) {
        newList.next = current2;
    } 

    if (current1 && !current2) {
        newList.next = current1;
    }

    return tmp.next;

}


