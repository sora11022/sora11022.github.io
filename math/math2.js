// 6)Tính S(n) = 1/(1*2) + 1/(2*3) + 1/( n(*n-1) )

function divA(n){
    let res = 0;
    for(let i = 2; i <= n; i++){
        res += 1/(i*(i-1))
    }
    return res;
}
console.log(divA(3).toFixed(2));

// 7)Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)

function divB(n){
    let res = 0;
    for(let i = 1; i<= n; i++){
        res += i/(i+1)
    }
    return res;
}
console.log(divB(3).toFixed(2));

// 8)Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)

function divC(n){
    let res = 0;
    for(let i = 0; i <= n; i++){
        res += ((2*i) + 1)/((2*i + 2))
    }
    return res;
}
console.log(divC(2));

// 9)Tính T(n) = 1*2*3*.....*n
function mulA(n){
    let res = 1;
    for(let i = 1; i<=n; i++){
        res *= i
    }
    return res;
}
console.log(mulA(4));

// 10)Tính T(x,n) = x^n

function powA(a,b){
    return Math.pow(a,b);
}
console.log(powA(2,3));