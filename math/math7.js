// 31)Tìm chữ số lớn nhất của số nguyên dương n
function findNum(a){
    let max = 0;
    let num = 0;
    while (a != 0) {
        num = a % 10;
        if(num > max){
            max = num;
        }
        a = Math.floor(a/10);
    }
    return max;
}
let a = 135487624296656;
console.log(`STN lon nhat trong day so ${a} la `+ findNum(a));

// 32)Tìm chữ số nhỏ nhất của số nguyên dương n
function findNumb(b){
    let min = 10;
    let num = 0;
    while (b != 0) {
        num = b % 10;
        if (num < min) {
            min = num;
        }
        b = Math.floor(b/10);
    }
    return min;
}
let b = 9872456876;
console.log(`STN nho nhat trong day so ${b} la ` + findNumb(b))

// 33)Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không ?
function sortNum(c){
    let val = true;
    let check = 1;
    let num = 0;
    while (c = Math.floor( c/10 )) {
        num = c % 10;
        if (num % 2 == 0) {
            check = 0;
            break;
        }
    }
    if (check === 1) {
        val = true;
    } else if (check === 0){
        val = false;
    }
    return val
}
c = 13557799991133;
console.log(`day so ${c} co phai la day so toan le k?: ` + sortNum(c));

// 34)Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không ?
function sortNumb(d){
    let val = true;
    let check = 1;
    let num = 0;
    while (d = Math.floor(d/10)) {
        num = d % 10;
        if (num % 2 != 0) {
            check = 0;
            break;
        }
    }
    if (check === 1) {
        val = true;
    } else if (check === 0){
        val = false;
    }
    return val
}
let d = 2461824;
console.log(`day so ${d} co phai la day so toan chan k?: ` + sortNumb(d));