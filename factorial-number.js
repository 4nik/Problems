function factorialFinder(num) {
    if (num <= 1)
        return 1;
    return num * factorialFinder(num - 1);
}

let number = 7;
let result = factorialFinder(number);
console.log(result);