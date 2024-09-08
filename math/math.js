// S(n) = 1 + 2 + 3 + ... + n - 1 + n
function tong(x){
    let sum = 0;
    for(let i = 0; i <= x; i++){
        sum += i
    }
    return sum
}
console.log(tong(6));

// S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2
function sumSqr(x) {
    let kq = 0;
    for(let i = 0; i<= x; i++){
        kq += Math.pow(i,2)
    }
    return kq
}
console.log(sumSqr(3));

// S(n) = 1 + 1/2 + 1/3 + ... + 1/n
function div(x){
    let kq = 0;
    for(let i = 1; i<= x; i++){
        kq += 1/i
    }
    return  kq.toFixed(3)
}
console.log(div(4));

// S(n) = 1/2 + 1/4 + ... + 1/2n
function divN(x){
    let res = 0;
    for(let i = 1; i <= x; i++){
            res += 1/(2*i)
    }
    return res
}

console.log(divN(3));

// S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n+1)

function divM(x){
    let res = 1;
    for(let i = 1; i <= x; i++){
        res += 1/(2*i + 1)
    }
    return res
}

console.log(divM(4));