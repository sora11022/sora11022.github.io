const arr = [1, 2, 3, 4, 5];
const newArr = arr.some(function(x){
    return x < 0;
})
console.log(newArr);