var SequenceSum = function (count) {
    if (count < 0) {
        return `${count}<0`
    } else if (count == 0) {
        return "0=0"
    }
    let arr = []
    let sum = 0
    for (let i = 0; i <= count; i++) {
        arr.push(i)
        sum += i
    }

    return arr.join('+') + ' ' + '=' + ' ' + `${sum}`
};



console.log(SequenceSum(6));