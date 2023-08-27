const arr = [1, -5, 2, 3, 4, 5];
const newArr = arr.some(function(x){
    return x < 0;
})
newArr == true && console.log("co so am")
newArr == false && console.log("k co so am");