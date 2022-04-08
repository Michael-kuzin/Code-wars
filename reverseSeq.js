const reverseSeq = n => {
    let arr = []
    arr.push(n)
    let temp = n
    for (let i = 1; i < n; i++) {
        temp -= 1
        arr.push(temp)
    }
    return arr;
};

console.log(reverseSeq(5));