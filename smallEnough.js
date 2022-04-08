function smallEnough(a, limit) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            arr.push(a[i])
        }
    }
    if (arr.length === 0) {
        return true
    }
    return false
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))