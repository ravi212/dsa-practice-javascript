import { HashTable } from "./hash-table.mjs";

const ht = new HashTable(8);
ht.set("paint", 25);
ht.set("bolts", 36);
console.log(ht.keys());