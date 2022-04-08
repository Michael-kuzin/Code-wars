sortme = function (names) {
    return names.sort((a, b) => a.toLowerCase() > b.toLowerCase());
}
console.log(sortme(['Hello', 'there', 'I\'m', 'fine']));