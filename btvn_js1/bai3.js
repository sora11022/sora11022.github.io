const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function reverseNum(num){
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    );
}
console.log(reversedNum(123456)) 

function reverseNum(n){
    return Number(n.toString().split('').reverse().join(''))
}
console.log(reverseNum(123678))