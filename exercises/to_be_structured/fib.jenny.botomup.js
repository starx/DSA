// bottom of approach
// https://youtu.be/lVR2u9lsxl8?t=1476


const fib = (n) => {
    let seq = [];
    seq[0] = 0;
    seq[1] = 1;

    for (i = 2; i <= n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }

    return seq[n];
};

const r = fib(10);

console.log(r, r === 8);


// Time: O(2 ^ n)
// Space: O(n)
