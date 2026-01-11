
# Graph

Node / Vertices
Edges

## Traversal algorithms

### Depth first

Exploring one direction as far as possible before switching direction
Uses stack (LIFO, you can push to the top only, only can remove the last from the stack)

From a given node explore all the neighbours and push them on a stack
After you are finished, pop the stack to get your first stack and recurse until you 


iteratably

const depthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
};

recursively

const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let neighbour of graph[source]) {
        depthFirstPrint(graph, neighbour);
    }
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

### Breath first

Explore all neighbours 
Uses queue (FIFO, you can push to the back only)

From a given node explore all the neighbours and push them on a queue
After you are finished, Get the first item in the queue and keep exploring the stack to get your first stack and recurse until you 


iteratably

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
};

breadthFirstPrint(graph, 'a');

recursively

const breadthFirstPrint = (graph, queue, source) => {
    if(!graph[source]) return;
    console.log(source);
    for (let neighbour of graph[source]) {
        queue.push(neighbour);
    }
    breadthFirstPrint(graph, queue, queue.shift());
};

breadthFirstPrint(graph, [], 'a');


## problems

### has path, acyclic, directed

https://structy.net/problems/has-path

acyclic
directed

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


depth first

```
const hasPath = (graph, src, dest) => {
    if (src == dst) return true;

    for (let neighbour of graph[src]) {
        if(hasPath(graph, neighbour, dst) === true) {
            return true;            
        }
    }

    return false;
}
```

breadthFirstPrint

```
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    // explore the breath of the branch and add to end of the queue
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
```

hasPath(graph, 'f', 'k');

### has path, cyclic, undirected

Test data

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];



const createAdjencyList = (edges) => {
  let adjencyList = {}
  for(const edge of edges) {
  	const [ a, b ] = edge;
  	if (!(a in adjencyList)) adjencyList[a] = [];
  	if (!(b in adjencyList)) adjencyList[b] = [];
      
      
    adjencyList[a].push(b);
    adjencyList[b].push(a);
  }
  return adjencyList;
}  

const hasUndirectedPath = (edges, nodeA, nodeB) => {
  adjencyList = createAdjencyList(edges);
  let visited = [];
  
  let queue = [nodeA];
  while(queue.length) {
  	const current = queue.shift();
    
    if(current === nodeB) {
    	return true;
    }
    if(visited.includes(current)) continue;
    visited.push(current);
    
    for(const neighbour of adjencyList[current]) {
    	queue.push(neighbour);
    }
  }
  return false;
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(hasUndirectedPath(edges, 'j', 'm')); // true
console.log(hasUndirectedPath(edges, 'm', 'j')); // true
console.log(hasUndirectedPath(edges, 'k', 'o')); // false
```

edges to adjency list
    - add both veritices (because it undirected and go eitherways)
- because undirected need to keep track of visited nodes
- use dfs / bfs to search
- 


- sliding window
- invert binary tree
- reverse linked list
- suffix tree
- heaps
    - binary heaps
- dynamic programming
- sorting: quick, merge