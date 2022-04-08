// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name
//         this.surname = surname
//         this.rate = rate
//         this.days = days
//     }
//     getSalary() {
//         return this.rate * this.days
//     }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary());


// class MyString {
//     reverse(str) {
//         return str.split("").reverse().join("");
//     }

//     ucFirst(str) {
//         let result = str.split("")
//         result.unshift(result[0].toUpperCase())
//         result.slice(1)
//         return result.join("")
//     }

//     ucWords(str) {
//         return str.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() })
//     }
// }

// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde'));

// function names() {
//     for (let i = 0; i < 7; i++) {
//         switch (i) {
//             case i == 0:
//                 console.log('#');
//             case i == 1:
//                 console.log('##');
//             case i == 2:
//                 console.log('###');
//             case i == 3:
//                 console.log('####');
//             case i == 4:
//                 console.log('#####');
//             case i == 5:
//                 console.log('######');
//             case i == 6:
//                 console.log('#######');
//         }
//     }
// }
// names()

// function checkBrackets(str) {
//     let n1 = 0
//     let n2 = 0
//     let str2 = '('
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str2) {
//             n1++
//         } else {
//             n2++
//         }
//     }
//     if (n1 === n2) {
//         return true
//     }

//     return false
// }

// console.log(checkBrackets("(((())()))()"))

// const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

// function withoutRepeat(array) {
//     const testValues = []
//     const uniqueValue = []

//     for (let i = 0; i < array.length; i++) {
//         let currItem = array[i]
//         let count = 0
//         for (let j = 0; j < array.length; j++) {
//             if (currItem === array[j]) {
//                 count++
//             }
//         }
//         if (count > 1) {
//             testValues.push(currItem)
//         } else {
//             uniqueValue.push(currItem)
//         }
//     }
//     console.log(testValues);
//     return uniqueValue
// }

// console.log(withoutRepeat(arr));


// function arrayToObject(arr) {
//     let newObj = {}
//     for (let i = 0; i < arr.length; i++) {
//         newObj[arr[i].name] = arr[i].value
//     }
//     return newObj
// }
// console.log(arrayToObject([
//     { name: 'width', value: 10 },
//     { name: 'height', value: 20 }
// ]));


// console.log((![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]]);
// console.log();

// function countBy(x, n) {
//     let z = [];
//     let temp = 0
//     for (let i = 0; i < n; i++) {
//         temp += x
//         z.push(temp)
//     }
//     return z;
// }

// console.log(countBy(2, 5));

const rps = (p1, p2) => {
    let scissors = 'scissors';
    let paper = 'paper';
    let rock = 'rock';
    switch (p1) {
        case scissors:
            if (p2 === scissors) {
                return 'Draw!'
            } else if (p2 === paper) {
                return 'Player 1 won!'
            } else if (p2 === rock) {
                return 'Player 2 won!'
            }
            break;

        case paper:
            if (p2 === paper) {
                return 'Draw!'
            } else if (p2 === rock) {
                return 'Player 1 won!'
            } else if (p2 === scissors) {
                return 'Player 2 won!'
            }
            break;
        case rock:
            if (p2 === rock) {
                return 'Draw!'
            } else if (p2 === scissors) {
                return 'Player 1 won!'
            } else if (p2 === paper) {
                return 'Player 2 won!'
            }
            break;
    }
};
console.log(rps('scissors', 'rock'));