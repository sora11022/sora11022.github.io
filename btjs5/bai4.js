const arr = [49, 30, 19, 2, 29];
function sumArray(arr){
    let sum = 0;
    arr.forEach(function(value){
        sum += value;
    });
    return sum;
}
function mulArray(arr){
    let mul = 1;
    arr.forEach(function(value){
        mul *= value;
    });
    return mul;
}
console.log(sumArray(arr));
console.log(mulArray(arr));
