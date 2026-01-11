const fib = (n: number) => {
    if (n === 0) return 0;

    let firstNumber: number = 0;
    let secondNumber: number = 1;
    let nextNumber: number;
    let fibSequence: Array<number> = [firstNumber, secondNumber];
    for (let i = 1; i <= n; i++) {
        nextNumber = firstNumber + secondNumber;
        fibSequence.push(nextNumber);

        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    console.log(fibSequence);
    return nextNumber;
}

console.log(fib(100));