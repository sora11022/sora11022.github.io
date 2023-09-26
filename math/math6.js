// 26)Hãy đếm số lượng chữ số lẻ của số nguyên dương n
function countA(n){
    let count = 0;
    let number = 0;
    while (n != 0) {
        number = n % 10;
        if (number % 2 != 0) {
            count++
        }
        n = Math.floor(n/10)
    }
    return count
}
console.log('co ' + countA(123556) + ' so le');

// 27)Hãy tính tổng các chữ số chẵn của số nguyên dương n
function sumA(n){
    let S = 0;
    let num = 0;
    while (n != 0) {
        num = n % 10;
        if (num % 2 == 0) {
            S += num;
        }
        n = Math.floor(n / 10)
    }
    return S;
}
console.log(sumA(123485));

// 28)Hãy tính tích các chữ số lẻ của số nguyên dương n
function mulA(n){
    let P = 1;
    let num = 0;
    while (n != 0) {
        num = n % 10;
        if (num % 2 != 0) {
            P *= num;
        }
        n = Math.floor(n / 10)
    }
    return P;
}
console.log(mulA(12345));

// 29)Cho số nguyên dương n . Hãy tìm chữ số đầu tiên của n
function findNum(n){
    let result = n.toString().charAt(0);
    return result;
}
console.log('so dau tien cua day so la: ' + findNum(8356));

// 30)Hãy tìm chữ số đảo ngược của số nguyên dương n
function reverseNum(x){
    let result = x.toString().split('').reverse().join('')
    return result;
}
const x = 12345
console.log(`day so dao ngc cua ${x} la: ` + reverseNum(x));