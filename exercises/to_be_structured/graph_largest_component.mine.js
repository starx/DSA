const explore = (adjencyList, current, visited) => {
    if (visited.has(parseInt(current))) return false;
    visited.add(parseInt(current));

    let componentSize = 1;
    for (const neighbour of adjencyList[current]) {
        const exploreResult = explore(adjencyList, neighbour, visited);
        if (exploreResult !== false) {
            componentSize += exploreResult;
        }
    }

    return componentSize;

}

const largestComponent = (adjencyList) => {
    let visited = new Set();
    let componentSizes = [];
    for (const index in adjencyList) {
        const list = adjencyList[index];
        const exploreCount = explore(adjencyList, index, visited);
        componentSizes.push(exploreCount);
    }
    return Math.max(...componentSizes);
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})); // 4

console.log(largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
})); // 5

console.log(largestComponent({
    0: ['4', '7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
})); // 3