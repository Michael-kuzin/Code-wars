function countBy(x, n) {
    let z = [];
    let temp = 0
    for (let i = 0; i < n; i++) {
        temp += x
        z.push(temp)
    }
    return z;
}