function capWord(str) {
    arr = str.split(" ");
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
let word = "hello world";
let capitalized = capWord(word);
console.log(capitalized);