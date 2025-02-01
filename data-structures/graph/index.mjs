import { Graph } from "./graph.mjs";

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.removeEdge("B", "C")
graph.addEdge("C", "D");
graph.removeEdge("D", "E")
graph.addEdge("E", "F");
graph.removeVertex("D")
console.log(graph);