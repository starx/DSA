// Write a function, maxPathSum, that takes in a grid as an argument.The function should return the maximum 
// sum possible by traveling a path from the top - left corner to the bottom - right corner.You may only travel
// through the grid by moving down or right.

// You can assume that all numbers are non - negative.

// Algo draft 1

// for each point in cordinate there are two ways to traverse
// to the right i.e. x + 1
// or to the bottom i.e y+1
// if you are at the last cell return your value, without doing anything
// if you are not at the last cell, try to traverse to right or down, by recursing
// among those two results use the maximum one and add to the value of current cell and return this

const isLastCell = (grid: Array<Array<number>>, x: number = 0, y: number = 0) => {

    const rows: number = grid.length;
    const cols: number = grid[0].length;
    //console.log('rows', rows, 'cols', cols, 'isLastCell');
    //console.log(x, cols-1, y, rows -1);
    return x === (cols - 1) && y === (rows - 1);

}


const maxPathSum = (grid: Array<Array<number>>, x: number = 0, y: number = 0, memo: Object = {}) => {

    //console.log(x, y, typeof grid[y] != "undefined" && 
    //  typeof grid[y][x] != "undefined" ? grid[y][x] : null);
    if (x + '_' + y in memo) return memo[x + '_' + y];

    let result: number = 0;
    if (
        typeof grid[y] != "undefined" &&
        typeof grid[y][x] != "undefined"
    ) {
        result = grid[y][x];
        if (!isLastCell(grid, x, y)) {
            // console.log('here')
            const rightResult = maxPathSum(grid, x + 1, y, memo)
            //console.log('rightResult', rightResult);
            const downResult = maxPathSum(grid, x, y + 1, memo);
            //console.log('downResult', downResult);
            result += Math.max(rightResult, downResult);
        }

    }
    // console.log('out')
    memo[x + '_' + y] = result;

    return result;
}



let grid: Array<Array<number>>, r: number;

// test_00:
grid = [
    [1, 3, 12],
    [5, 1, 1],
    [3, 6, 1],
];
r = maxPathSum(grid);
console.log(r, r === 18);

// test_01:
grid = [
    [1, 2, 8, 1],
    [3, 1, 12, 10],
    [4, 0, 6, 3],
];
r = maxPathSum(grid);
console.log(r, r === 36);

// test_02:
grid = [
    [1, 2, 8, 1],
    [3, 10, 12, 10],
    [4, 0, 6, 3],
];
r = maxPathSum(grid);
console.log(r, r === 39);

// test_03:
grid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
r = maxPathSum(grid);
console.log(r, r === 27);

// test_04:
grid = [
    [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
r = maxPathSum(grid);
console.log(r, r === 56);