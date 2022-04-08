function count(string) {
    let result = {}
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = 0
    }
    for (let j = 0; j < arr.length; j++) {
        ++result[arr[j]]
    }
    return result;
}
console.log(count('ababbaa'));