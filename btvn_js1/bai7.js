function bieuthuc(n){
    let S = 0;
    for(i = 1;i <= n; i++){
        S += 1/Math.pow(n,3);
    }
    return S.toFixed(3);
}
console.log(bieuthuc(1))