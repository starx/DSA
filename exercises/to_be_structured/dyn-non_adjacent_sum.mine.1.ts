// Write a function, * nonAdjacentSum *, that takes in an array of numbers as an argument.
// The function should return the maximum sum of non - adjacent elements in the array.
// There is no limit on how many elements can be taken into the sum as long as they are not adjacent.


const nonAdjacentSum = (nums) => {
  // todo
};


let nums: Array<number>, r: number;

// test_00:

nums = [2, 4, 5, 12, 7];
r = nonAdjacentSum(nums); 
console.log(r, r === 16);

// test_01:

nums = [7, 5, 5, 12];
r = nonAdjacentSum(nums); 
console.log(r, r === 19);

// test_02:

nums = [7, 5, 5, 12, 17, 29];
r = nonAdjacentSum(nums); 
console.log(r, r === 48);

// test_03:

nums = [
  72, 62, 10,  6, 20, 19, 42,
  46, 24, 78, 30, 41, 75, 38,
  23, 28, 66, 55, 12, 17, 9,
  12, 3, 1, 19, 30, 50, 20
];
r = nonAdjacentSum(nums); 
console.log(r, r === 488);

// test_04:

nums = [
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
  61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  42
];
r = nonAdjacentSum(nums); 
console.log(r, r === 1465);