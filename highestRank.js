function highestRank(arr) {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {

        if (hash[arr[i]]) hash[arr[i]]++

        else

            hash[arr[i]] = 1

    }

    let countMax = 0;

    let valueMax = 0;

    for (element in hash) {

        if (countMax <= hash[element]) {

            valueMax = Math.max(element, valueMax)

            countMax = Math.max(hash[element], countMax)

        }

    }

    return valueMax
}
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));