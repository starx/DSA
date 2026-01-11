const createUndirectedAdjencyList = (edges) => {
    let adjencyList = {}
    for (const edge of edges) {
        let [a, b] = edge;
        a = String(a);
        b = String(b);

        if (!(a in adjencyList)) adjencyList[a] = [];
        if (!(b in adjencyList)) adjencyList[b] = [];


        adjencyList[a].push(b);
        adjencyList[b].push(a);
    }
    return adjencyList;
}


const shortestPath = (edges, src, dst) => {
    const adjencyList = createUndirectedAdjencyList(edges);
    // console.log('adjencyList', adjencyList)
    const queue = [];
    let visited = [];

    queue.push([String(src), 0]);

    // console.log('queue', queue, 'visited', visited);

    while (queue.length) {
        let [current, depth] = queue.shift();
        // console.log('current', current, 'depth', depth);

        if (visited.includes(current)) continue;
        visited.push(String(current));

        for (const neighbour of adjencyList[current]) {
            //console.log(neighbour)
            if (neighbour === dst) return depth + 1;

            queue.push([String(neighbour), depth + 1]);

        }
    }
    return -1;
}


let edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2`

edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

console.log(shortestPath(edges, 'y', 'x')); // -> 1`

edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

console.log(shortestPath(edges, 'a', 'e')); // -> 3`

edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

console.log(shortestPath(edges, 'e', 'c')); // -> 2`

edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

console.log(shortestPath(edges, 'b', 'g')); // -> -1

edges = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];

console.log(shortestPath(edges, 'w', 'e')); // -> 1

edges = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];

console.log(shortestPath(edges, 'n', 'e')); // -> 2

edges = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
];

console.log(shortestPath(edges, 'm', 's')); // -> 6