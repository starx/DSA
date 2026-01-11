
const dfsRecursively = (adjencyList, source, visited) => {
    if (visited.has(parseInt(source))) return false;

    visited.add(parseInt(source));

    let foundVisitedNode = false;
    for (const neighbour of adjencyList[source]) {
        if (dfsRecursively(adjencyList, neighbour, visited) === false) {
            anyNonVisitedNodes = true;;
        }
    }

    if (anyNonVisitedNodes)
        return true;
    else
        return false;


}

const connectedComponentsCount = (adjencyList) => {
    const visited = new Set();
    let componentCount = 0;
    Object.entries(adjencyList).forEach((v) => {
        if (dfsRecursively(adjencyList, v[0], visited) === true) {
            componentCount++;
        }
    });
    return componentCount;

}

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2

console.log(connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
})); // 1