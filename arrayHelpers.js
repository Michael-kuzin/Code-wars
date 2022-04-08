function square(arr) {
    return arr.map(elm => elm * elm)
}
console.log(square([1, 2, 3, 4, 5]));

function cube(arr) {
    return arr.map(elm => elm * elm * elm)
}
console.log(cube([1, 2, 3, 4, 5]));

function average(arr) {
    if (arr.length === 0) {
        return NaN
    }
    const sum = arr.reduce((a, b) => a + b, 0);
    const averageValue = (sum / arr.length) || 0;
    return averageValue
}
console.log(average([1, 2, 3, 4, 5]));

function sum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }

    return result
}
console.log(sum([1, 2, 3, 4, 5]));

function even(arr) {
    let evenArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        }
    }
    return evenArr
}
console.log(even([1, 2, 3, 4, 5]));

function odd(arr) {
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i])
        }
    }
    return oddArr
}
console.log(odd([1, 2, 3, 4, 5]));

Array.prototype.square = function () { return this.map(function (n) { return n * n; }); }
Array.prototype.cube = function () { return this.map(function (n) { return n * n * n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum = function () { return this.reduce(function (a, b) { return a + b; }, 0); }
Array.prototype.even = function () { return this.filter(function (item) { return 0 == item % 2; }); }
Array.prototype.odd = function () { return this.filter(function (item) { return 0 != item % 2; }); }