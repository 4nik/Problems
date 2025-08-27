function evenNumbers(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] & 1)
            continue;
        even.push(arr[i]);
    }
    return even;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = evenNumbers(numbers);
console.log(evens);