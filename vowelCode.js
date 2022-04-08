function encode(string) {
  let pattern = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  let keys = Object.keys(pattern)
  let arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case keys[0]:
        arr[i] = pattern[keys[0]]
        break;
      case keys[1]:
        arr[i] = pattern[keys[1]]
        break;
      case keys[2]:
        arr[i] = pattern[keys[2]]
        break;
      case keys[3]:
        arr[i] = pattern[keys[3]]
        break;
      case keys[4]:
        arr[i] = pattern[keys[4]]
        break;
    }
  }
  return arr.join('')
}
console.log(encode('hi there'));

function decode(string) {
  let pattern = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  let keys = Object.keys(pattern)
  let arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case keys[0]:
        arr[i] = pattern[keys[0]]
        break;
      case keys[1]:
        arr[i] = pattern[keys[1]]
        break;
      case keys[2]:
        arr[i] = pattern[keys[2]]
        break;
      case keys[3]:
        arr[i] = pattern[keys[3]]
        break;
      case keys[4]:
        arr[i] = pattern[keys[4]]
        break;
    }
  }
  return arr.join('')
}
console.log(decode('h3 th2r2'));