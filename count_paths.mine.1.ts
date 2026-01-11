
    // Algo draft 1
    
    // for each point in cordinate there are two ways to traverse
    // to the right i.e. x + 1
    // or to the bottom i.e y+1
    // if any of these two possible directions if it is "O" recurse
    // if you arrive at the lastCell and its values is "O", that is a path

const isLastCell = (grid: Array<Array<String>>, x: number = 0, y: number = 0) => {

    const rows: number = grid.length;
    const cols: number = grid[0].length;
    //console.log('rows', rows, 'cols', cols, 'isLastCell');
    //console.log(x, cols-1, y, rows -1);
    return x === (cols - 1) && y === (rows - 1);

}

const printGrid = (grid) => {
    grid.forEach((row, y) => {
        // console.log(y,row);
        row.forEach((col, x) => {
            console.log(x, y, col)
        })
    })
}

const countPaths = (grid: Array<Array<String>>, x: number = 0, y: number = 0, memo: Object = {}) => {
    //console.log(x, y, typeof grid[y] != "undefined" && 
    //  typeof grid[y][x] != "undefined" ? grid[y][x] : null);
    if (x + '_' + y in memo) return memo[x + '_' + y];

    let result: number = 0;
    if (
        typeof grid[y] != "undefined" &&
        typeof grid[y][x] != "undefined" &&
        grid[y][x] === 'O'
    ) {
        if (isLastCell(grid, x, y)) {
            result = 1;
            //console.log('yes');
        } else {
            // console.log('here')
            const rightResult = countPaths(grid, x + 1, y, memo)
            //console.log('rightResult', rightResult);
            const downResult = countPaths(grid, x, y + 1, memo);
            //console.log('downResult', downResult);
            result = rightResult + downResult;
        }

    }
    // console.log('out')
    memo[x + '_' + y] = result;

    return result;
}



let grid: Array<Array<String>>, r: number;

grid = [
    ["O", "O"],
    ["O", "O"],
];
r = countPaths(grid); 
console.log(r === 2);

grid = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 5);

grid = [
    ["O", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 3);

grid = [
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 1);

grid = [
    ["O", "O", "X", "O", "O", "O"],
    ["O", "O", "X", "O", "O", "O"],
    ["X", "O", "X", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 0);

grid = [
    ["O", "O", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 42);

grid = [
    ["O", "O", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "X"],
];
r = countPaths(grid); 
console.log(r === 0);

grid = [
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 40116600);

grid = [
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
];
r = countPaths(grid); 
console.log(r === 3190434);