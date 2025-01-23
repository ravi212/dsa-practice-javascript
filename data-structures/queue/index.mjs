import { Queue } from "./queue.mjs";

const queue = new Queue(5);
queue.enqueue(11)
queue.enqueue(12)
console.log(queue.dequeue())
console.log(queue)