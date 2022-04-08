function findSum(n) {
    if (n === 0) {
        return 0
    }
    let result = 0
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i
        }
    }
    return result
}
console.log(findSum(10));