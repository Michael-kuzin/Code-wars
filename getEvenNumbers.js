function getEvenNumbers(numbersArray) {
    let result = []
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            result.push(numbersArray[i])
        }

    }
    return result
}
console.log(getEvenNumbers([2, 4, 5, 6]));