import { Node } from "./node.mjs";

export class BST{
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let temp = this.root;
            while(true) {
                if (newNode.value == temp.value) return undefined;
                if(newNode.value < temp.value){
                    if(!temp.left) {
                        temp.left = newNode;
                        return this;
                    } 
                    temp = temp.left;
                } else {
                    if (!temp.right) {
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right;
                }
            }
        }
    }

    contains(value) {
        if (!this.root) return false;
        let temp = this.root;
        while(temp){
            if(value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) { 
                temp = temp.right;
            } else {
                return true;
            }
        } 
        return false
    }
}