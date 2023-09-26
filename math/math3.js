// 11)Tính S(n) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n
function baiA(n){
    let S = 0;
    let P = 1;

    for(let i = 1; i <= n; i++){
        P *= i;
        S += P;
    }
    return S
}
console.log(baiA(4));

// 12)Tính S(x,n) = x + x^2 + x^3 + ... + x^n
function baiB(x,n){
    let S = 0;
    for(let i = 1; i<= n; i++){
        S += Math.pow(x,i)
    }
    return S;
}
console.log(baiB(2,3));

// 13)Tính S(x,n) = x^2 + x^4 +.... + x^2n
function baiC(x,n){
    let S = 0;
    for(let i = 1; i<= n; i++){
        if(i % 2 == 0 ){
            S += Math.pow(x,i)
        }
    }
    return S;
}
console.log(baiC(2,3));

// 14)Tính S(x,n) = x + x^3 + x^5 +....+ x^(2n+1)
function baiD(x,n){
    let S = 0;
    for(let i = 1; i<= n; i++){
        if(i % 2 != 0 ){
            S += Math.pow(x,i)
        }
    }
    return S;
}
console.log(baiD(2,3));

// 15)Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)
function baiE(n){
    let S = 0;
    let P = 0;
    for(let i = 1; i<= n; i++){
        S += i;
        P += 1/S;
    }
    return P
}
console.log(baiE(4));
