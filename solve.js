function solve(s) {
    let lowercase = 0
    let uppercase = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            uppercase++
        } else {
            lowercase++
        }
    }
    if (lowercase >= uppercase) {
        return s.toLowerCase()
    } else if (lowercase < uppercase) {
        return s.toUpperCase()
    }
}

console.log(solve("coDE"));