export function preOrder () {
    const results = [];
    function traverse(currentNode) {
        results.push(currentNode.value);
        if(currentNode.left) traverse(currentNode.left);
        if(currentNode.right) traverse(currentNode.right); 
    }
    traverse(this.root);
    return results;
}

export function inOrder () {
    const results = [];
    function traverse(currentNode) {
        if(currentNode.left) traverse(currentNode.left);
        results.push(currentNode.value);
        if(currentNode.right) traverse(currentNode.right); 
    }
    traverse(this.root);
    return results;
}

export function postOrder () {
    const results = [];
    function traverse(currentNode) {
        if(currentNode.left) traverse(currentNode.left);
        if(currentNode.right) traverse(currentNode.right); 
        results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
}