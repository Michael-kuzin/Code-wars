const reverse = str =>
    str.trim().split(' ').map((elm, i) => i % 2 ? elm.split('').reverse().join('') : elm).join(' ')