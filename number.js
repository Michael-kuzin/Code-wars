var number = function (array) {
    if (array.length === 0) {
        return array
    }
    let count = 1
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(`${count}: ` + array[i])
        count++
    }
    return result
}
console.log(number(["a", "b", "c"]));