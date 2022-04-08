function findUniq(arr) {
    const x = arr.filter((elm) => elm === arr[0]);
    const y = arr.filter((elm) => elm !== arr[0]);

    return x.length > y.length ? y[0] : x[0]
}
console.log(findUniq([1, 0, 0]));