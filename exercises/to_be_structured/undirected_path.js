const createAdjencyList = (edges) => {
    let adjencyList = {}
    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in adjencyList)) adjencyList[a] = [];
        if (!(b in adjencyList)) adjencyList[b] = [];


        adjencyList[a].push(b);
        adjencyList[b].push(a);
    }
    return adjencyList;
}

const hasUndirectedPathBfs = (edges, nodeA, nodeB) => {
    adjencyList = createAdjencyList(edges);
    let visited = [];

    let queue = [nodeA];
    while (queue.length) {
        const current = queue.shift();

        if (current === nodeB) {
            return true;
        }
        if (visited.includes(current)) continue;
        visited.push(current);

        for (const neighbour of adjencyList[current]) {
            queue.push(neighbour);
        }
    }
    return false;
};



const hasUndirectedPathDfsInteratively = (edges, nodeA, nodeB) => {
    adjencyList = createAdjencyList(edges);
    let visited = [];

    let queue = [nodeA];
    while (queue.length) {
        const current = queue.pop();

        if (current === nodeB) {
            return true;
        }
        if (visited.includes(current)) continue;
        visited.push(current);

        for (const neighbour of adjencyList[current]) {
            queue.push(neighbour);
        }
    }
    return false;
};

const hasPathDfsRecursively = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);

    for (const neighbour of graph[src]) {
        if (hasPathDfsRecursively(graph, neighbour, dst, visited)) {
            return true;
        }
    }
    return false;
}

const hasUndirectedPathDfsRecursively = (edges, nodeA, nodeB) => {
    const adjencyList = createAdjencyList(edges);
    return hasPathDfsRecursively(adjencyList, nodeA, nodeB, new Set());
};




const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(hasUndirectedPathBfs(edges, 'j', 'm')); // true
console.log(hasUndirectedPathBfs(edges, 'm', 'j')); // true
console.log(hasUndirectedPathBfs(edges, 'k', 'o')); // false
console.log(hasUndirectedPathBfs(edges, 'i', 'o')); // false



console.log(hasUndirectedPathDfsInteratively(edges, 'j', 'm')); // true
console.log(hasUndirectedPathDfsInteratively(edges, 'm', 'j')); // true
console.log(hasUndirectedPathDfsInteratively(edges, 'k', 'o')); // false
console.log(hasUndirectedPathDfsInteratively(edges, 'i', 'o')); // false


console.log(hasUndirectedPathDfsRecursively(edges, 'j', 'm')); // true
console.log(hasUndirectedPathDfsRecursively(edges, 'm', 'j')); // true
console.log(hasUndirectedPathDfsRecursively(edges, 'k', 'o')); // false
console.log(hasUndirectedPathDfsRecursively(edges, 'i', 'o')); // false