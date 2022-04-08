function invert(array) {
    if (array.length === 0) {
        return []
    }
    let result = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result.push(parseInt('-' + array[i].toString()))
        } else if (array[i] < 0) {
            result.push(Math.abs(array[i]))
        }

    }
    return result
}

console.log(invert([0]));