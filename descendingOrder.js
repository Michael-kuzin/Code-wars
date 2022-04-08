function descendingOrder(n) {
    let str = n.toString()
    let arr = str.split('')
    let sortArr = arr.sort((a, b) => a - b)
    let reverseArr = sortArr.reverse()
    let reverseStr = reverseArr.join('')
    return Number(reverseStr)
}
console.log(descendingOrder(145263));