var capitals = function (word) {
    let arr = word.split('')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            result.push(i)
        }
    }

    return result
};
console.log(capitals('CodEWaRs'));