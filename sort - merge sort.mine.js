
const merge = (arr1, arr2) => {
    if (arr1[0] > arr2[0]) return [...arr2, ...arr1];
    return [...arr1, ...arr2];
}

const mergeSort = (arr) => {
    const total = arr.length;
    const mid = Math.ceil(total / 2)

    let halves = [arr.slice(0, mid), arr.slice(mid, total)];

    halves.forEach((index, piece) => {
        if (piece.length > 1) {
            halves[index] = mergeSort(piece);
        }
    });


    return merge(halves[0], halves[1])
}

console.log(mergeSort([12, 11, 13, 5, 6, 7]));