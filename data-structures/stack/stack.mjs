import { Node } from "./node.mjs";

export class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    // push and pop from start of node because shift and unshift in a queue is O(1)

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop() {
        if(!this.top) return undefined;
        const temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}