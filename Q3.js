// Reverse a singly linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    push(data) {

        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {

        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    reverse() {

        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {

            next = current.next;

            current.next = prev;

            prev = current;

            current = next;
        }

        this.head = prev;
    }
}


let list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log("Before Reverse:");
list.print();

list.reverse();

console.log("After Reverse:");
list.print();