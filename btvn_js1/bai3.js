function reverseNum(n){
    return Number(n.toString().split('').reverse().join(''))
}
console.log(reverseNum(123678))