
const trib = (n: number, tribSequence: Object = {}) => {
    if (n <= 1) return 0;
    if (n === 2) return 1;

    if (n in tribSequence) {
        return tribSequence[n];
    }

    tribSequence[n] = trib(n - 1, tribSequence) + trib(n - 2, tribSequence) + trib(n - 3, tribSequence);

    return tribSequence[n];    
}

console.log(trib(7)); // 13