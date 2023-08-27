function sumArr(...args){
    let sum = 0;
    for (let val of args) {
        sum += val;
    }
    return sum;
}
console.log(sumArr(1, 2, 3, 4, 5));