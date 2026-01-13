let fibSequence: Object = {};
const fib = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if(typeof fibSequence[n] === "undefined") {
        fibSequence[n] = fib(n - 1) + fib(n - 2)
    }
    
    return fibSequence[n];
    
}

// time: O(2n) --> O(n)
// space: O(n)
console.log(fib(6)); // 8