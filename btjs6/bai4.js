const arr = [1, 2, 3, -8, 4, 5];
const newArr = arr.every(function(x){
    return x > 0;
})
console.log(newArr);