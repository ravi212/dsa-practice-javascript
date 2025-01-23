import { Node } from "./node.mjs";

export class Queue{
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // from end of the linkedlist as it has big o of o(1)
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // from start of the linkedlist as it has big o of o(1)
    dequeue() {
        if (this.length == 0) return undefined;
        const temp = this.first;
        if (this.length == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}