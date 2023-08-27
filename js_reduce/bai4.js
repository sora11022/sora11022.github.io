const arr = [49, 30, 19, 2, 29];
const sum = arr.reduce((pre, cur) =>{
    return pre + cur
}, 0)

const mul = arr.reduce((prev, curr) =>{
    return prev * curr
})
console.log(sum);
console.log(mul);