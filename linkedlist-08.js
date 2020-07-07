// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    if (!llist1 || !llist2) {
        return 0;
    }

    let current1 = llist1;
    let current2 = llist2;
    while (current1 && current2) {
        if (current1.data !== current2.data) {
            return 0;
        }

        current1 = current1.next;
        current2 = current2.next;
    }

    if (current1 && !current2 || !current1 && current2) return 0;

    return 1; 
    

}


