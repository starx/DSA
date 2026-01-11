
//pseudo code
// breadth first search
// start off with current sum of 0
// create an empty queue to hold the sum tree
// loop through each of the coin and keep adding the value of each coin
// when adding if the value is the target sum
// add to the queuue and add go to the next coin


// problem with this approach was that I wasn't reducing the problem size I was increasing it.
// there was a preexiting graph structure for me to do breadth first search on
// I was creating it on the fly and that way it could go forever

const rec = (targetSum: number, coins: Array<number>, currentSum: number, currentCoinCount: number) => {
    console.log('currentSum', currentSum, 'currentCoinCount', currentCoinCount);
    let queue: Array<Array<number>> = [];
    for (let coinValue: number of coins) {
        const newSum: number = currentSum + coinValue;
        const newCount: number = currentCoinCount + 1;
        console.log('coinvalue', coinValue, 'newSum', newSum, 'newCount', newCount);
        if (newSum === targetSum) {
            return newCount;
        }
        if (newSum < targetSum) {
            queue.push([coinValue, newSum, newCount]);
        }

    }

    console.log(queue);


    // queue.forEach(const [coinValue, newSum, newCount]: [number, number, number]) => {
    queue.forEach(([coinValue, newSum, newCount]) => {
        console.log('coinvalue', coinValue, 'newSum', newSum, 'newCount', newCount);
        const out = rec(targetSum, coins, newSum, newCount);

        if (out > 0) {
            return out;
        }
    })

    return -1;
}

const minChange = (amount: number, coins: Array<number>) => {
    return rec(amount, coins, 0, 0);
}

const result = minChange(8, [1, 5, 4, 12]);
console.log(result, result === 2);