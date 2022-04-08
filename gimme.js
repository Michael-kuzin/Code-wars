function gimme(triplet) {
    let num1 = triplet[0]
    let num2 = triplet[1]
    let num3 = triplet[2]
    if (num1 > num2 && num1 < num3) {
        return 0
    } else if (num2 > num1 && num2 < num3) {
        return 1
    } else if (num3 > num2 && num3 < num1) {
        return 2
    } else if (num1 < num2 && num1 > num3) {
        return 0
    } else if (num2 < num1 && num2 > num3) {
        return 1
    } else if (num3 < num2 && num3 > num1) {
        return 2
    }
}
console.log(gimme([5, 10, 14]));