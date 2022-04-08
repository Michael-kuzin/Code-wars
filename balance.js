function balance(left, right) {
    let result = ''
    let rightScore = 0
    let leftScore = 0
    let arr1 = left.split('')
    let arr2 = right.split('')
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === '!') {
            leftScore += 2
        } else {
            leftScore += 3
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === '!') {
            rightScore += 2
        } else {
            rightScore += 3
        }
    }
    if (rightScore > leftScore) {
        result = 'Right'
    } else if (leftScore > rightScore) {
        result = 'Left'
    } else {
        result = 'Balance'
    }

    return result
}
console.log(balance("!!???!????", "??!!?!!!!!!!"));