// function stray(numbers) {
//     let result = numbers.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
//     return result[0]
// }

function stray(numbers) {
    var a = numbers.sort();

    if (a[0] != a[1]) {
        return a[0]
    }
    return a[a.length - 1]
}

console.log(stray([57, 57, 57, 57, 35]));