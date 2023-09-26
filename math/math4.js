// 16)Tính S(x,n) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n!
function mathA(x,n){
    let S = 0;
    let P = 1;
    for(let i = 1; i<= n; i++){
        P *= i
        S += (Math.pow(x,i)/P)
    }
    return S
}
console.log(mathA(2,4));

// 17)Tính S(x,n) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)!
function mathB(x,n){
    let S = 0;
    let P = 1;
    for(let i = 1; i<= n; i++){
        if(i % 2 == 0){
            P *= i
            S += (Math.pow(x,i)/P)
        }
    }
    return S
}
console.log(mathB(2,4));

// 18)Tìm ước số lẻ lớn nhất của số nguyên dương n
function mathC(n){
    let max = 0
    for(let i = 1; i<=n ; i++){
        if(n % i == 0 && i % 2 != 0){
            max = i
        }
    }
    return max
}
console.log(mathC(100));

// 19)Tính S(n) = sqrt(2 + sqrt (2 + ... sqrt ( 2 + sqrt(2) ) ) )
function mathD(n){
    let S = 0;
    for(let i = 1; i <= n; i++){
        S = Math.sqrt(2 + S)
    }
    return S
}
console.log(mathD(5).toFixed(3));

// 20)Tính S(n) = sqrt(n + sqrt (n-1 + sqrt(n-2 + ...sqrt(2 + sqrt (1)))))
function mathE(n){
    let S = 0
    for(let i = 1; i <= n; i++){
        S = Math.sqrt(i + S)
    }
    return S
}
console.log(mathE(5).toFixed(3));