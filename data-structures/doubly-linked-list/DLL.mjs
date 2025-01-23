import Node from "./node.mjs";

export class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {   
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.tail;        
        if (this.length == 0) {
            this.head = null;
            this.tail = null
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
            this.head.prev = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined; 
        let temp = this.head;
        if (index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set() {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index == 0) return this.unshift(value);
        if (index == this.length - 1) return this.push(value);
        if (index < 0 || index >= this.length) return false;

        let after = this.get(index);
        let before = after.prev;
        const newNode = new Node(value);
        after.prev = newNode;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        this.length++;
        return true;
    }

    remove(index) {
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        if (index < 0 || index >= this.length) return false;
        
        let temp = this.get(index);
        let before = temp.prev;
        let after = temp.next;
        temp.next = null;
        temp.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;
        return temp;
    }
}