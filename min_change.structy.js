const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo = {}) => {
    if (amount < 0) return Infinity;

    if (amount === 0) return 0;

    if (amount in memo) return memo[amount];

    let min = Infinity;
    for (let coin of coins) {
        const numCoins = 1 + _minChange(amount - coin, coins, memo);
        min = Math.min(numCoins, min);
    }
    return memo[amount] = min;
};

// a = amount
// c = # coins
// Time: O(a * c)
// Space: O(a)

// key points

// Keeps using the concept of reducing the problem size
// Does not care about giving what combination of coins is the min change
//      keeps focusing the number of min change
//      Once again, the function is returning the MINIMUM 
//      CHANGE, so the whole implementation is focused around that.
// expectation is to find the 0
//  if you find that, it means you have a found a traversal path where the change is possible.