export function BFS () {
    
    let currentNode = this.root;
    const queue = [];
    const results = [];
    queue.push(currentNode)

    while (queue.length) {
        currentNode = queue.shift();
        results.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }

    return results;
}
