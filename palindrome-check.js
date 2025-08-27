function checkPalindrome(str){
    let len = str.length;
    for(let x=0;x<len/2;x++){
        if(str[x]!==str[len-x-1])
            return false;
    }
    return true;
}

let str = 'madam'
let ans = checkPalindrome(str);
console.log(ans);