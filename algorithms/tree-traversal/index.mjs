import { BST } from "../../data-structures/tree/tree.mjs";
import { BFS } from "./bfs.mjs";
import { inOrder, postOrder, preOrder } from "./dfs.mjs";

BST.prototype.BFS = BFS;
BST.prototype.DFSPre = preOrder;
BST.prototype.DFSin = inOrder;
BST.prototype.DFSPost = postOrder;

const tree = new BST();

tree.insert(47)
tree.insert(21)
tree.insert(76)
tree.insert(18)
tree.insert(27)
tree.insert(52)
tree.insert(82)

console.log("[BFS RESULT]: ", tree.BFS());
console.log("[DFS PRE_ORDER RESULT]: ", tree.DFSPre());
console.log("[DFS IN_ORDER RESULT]: ", tree.DFSin());
console.log("[DFS POST_ORDER RESULT]: ", tree.DFSPost());