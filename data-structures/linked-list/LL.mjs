import Node from "./node.mjs";

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head)  return undefined;

        let temp = this.head;
        let prev = temp;

        while(temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        
        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(value, index) {

        let temp = this.get(index)
        if (temp) {
            temp.value = value;
            return true
        }
        return false;

    }

    insert(value, index) {
        if (index == 0) return this.unshift(value);
        if (index == this.length) return this.push(value);
        if (index < 0 || index >= this.length) return false;
        
        const newNode = new Node(value);

        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;

        return true
    }

    remove(index) {
        if (index == 0) return this.shift(); 
        if (index == this.length) return this.pop(); 
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.get(index);
        let prev = this.get(index - 1);

        prev.next = temp.next;
        temp.next = null;

        length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let before = null;
        let after = temp.next;

        for(let i = 0; i < this.length; i++) {
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
            
        }
        return this
    }
}

export default LinkedList