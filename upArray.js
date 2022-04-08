function upArray(arr) {

    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }


    return arr;
}
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]));