function squareSum(numbers) {
    let result = 0
    numbers.map(num => {
        result += Math.pow(num, 2)
    })
    return result
}
console.log(squareSum([1, 2, 2]));