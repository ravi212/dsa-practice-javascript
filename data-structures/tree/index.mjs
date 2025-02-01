import { BST } from "./tree.mjs";

const bst = new BST();
bst.insert(15);
bst.insert(5);
bst.insert(20);
bst.insert(7);
bst.insert(13);
console.log(bst.contains(1));