// 21)Tính S(n) = sqrt(1 + sqrt(2 + sqrt (3 + ...sqrt (n-1 + sqrt (n)))))
function mathA(n){
    let S = 0;
    for(let i=n ;i>0; i--){
        S = Math.sqrt(i + S)
    }
    return S
}
console.log(mathA(10).toFixed(3));


// 22)S(n) = 1/(1 + 1/(1 + 1/(1 + 1/(... 1 /(1/(1 + 1/(1 + 1 )))))))
function mathB(n){
    let S = 0;
    for(let i = n; i >= 1; i--){
        S = 1/(1 + S)
    }
    return S
}
console.log(mathB(5));

function bai22(n){
    if(n === 0) return 0.5;
    return 1/(1+bai22(n-1));
}
console.log(bai22(5));

// 23)Hãy đếm số lượng chữ số của số nguyên dương n
function countA(n){
    let str = n.toString();
    const count = str.length;
    return count;
}
console.log(countA(1500));

function bai23(n){
    let counter = 0;
    let num = 0;
    while (n != 0) {
        num = n % 10;
        counter++;
        n = Math.floor(n/10)
    }
    return counter
}
console.log('bai 23: ' + bai23(1500));
// 24)Hãy tính tổng các chữ số của số nguyên dương n
function sumA(n){
    let S = 0;
    let letter = 0;
    while (n != 0) {
        letter = n % 10;
        S += letter;
        n = Math.floor(n / 10)
    }
    return S;
}
console.log(sumA(123));

// 25)Hãy tính tích các chữ số của số nguyên dương n
function mulA(n){
    let P = 1;
    let letter = 0;
    while (n != 0) {
        letter = n % 10;
        P *= letter;
        n = Math.floor(n / 10)
    }
    return P;
}
console.log(mulA(456));