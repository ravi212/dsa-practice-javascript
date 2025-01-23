import { DoublyLinkedList } from "./DLL.mjs";

const dll = new DoublyLinkedList(3);
dll.push(11)
dll.push(23)
// dll.insert(2, 25)
// dll.shift()
// console.log(dll.pop())
console.log(dll.remove(1))
console.log(dll)