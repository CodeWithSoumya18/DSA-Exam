// Detect if a linked list is circular.

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

    isCircular() {

        if (this.head === null) {
            return false;
        }

        let current = this.head.next;

        while (current !== null && current !== this.head) {
            current = current.next;
        }

        return current === this.head;
    }
}


let list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);


let temp = list.head;

while (temp.next !== null) {
    temp = temp.next;
}

temp.next = list.head;
console.log(list.isCircular());