function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let c of str.toLowerCase()) {
    if (vowels.includes(c)) {
      count++;
    }
  }

  return count;
}


console.log(countVowels("programming"));