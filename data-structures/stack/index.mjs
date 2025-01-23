import { Stack } from "./stack.mjs";

const stack = new Stack(4);
stack.push(11)
console.log(stack.pop());
console.log(stack);