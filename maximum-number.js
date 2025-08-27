function maxNumber(arr){
    let maxValue = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxValue)
            maxValue = arr[i];
    }
    return maxValue;
}

let arr = [3,5,7,2,8,1];
let max = maxNumber(arr);
console.log(max);