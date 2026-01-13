const fib = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n-1) + fib(n-2);
}

// time: O(2^n)
// space: O(n)
console.log(fib(6));