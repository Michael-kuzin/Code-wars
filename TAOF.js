// Total amount of points

function points(games) {
    let result = 0

    for (let i = 0; i < games.length; i++) {
        let str
        str = games[i].split()
        console.log(typeof parseInt(str[0][2]));
        if (str[0][0] > str[0][2]) {
            result += 3
        } else if (str[0][0] == str[0][2]) {
            result += 1
        }
    }

    return result
}

console.log(points(["3:1", "2:2", "0:1"]));