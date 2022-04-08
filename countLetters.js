function letterCount(s) {
    return s.split``.reduce((a, b) => (a[b] = a[b] + 1 || 1, a), {})
}
console.log(letterCount('arithmetics'));