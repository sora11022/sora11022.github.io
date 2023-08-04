
function giaithua(n){
    if(n == 1 || n == 0){
        return 1;
    }
    for(i = n - 1; i >= 1 ; i--){
        n = n * i
    }
    return n;
}
console.log(giaithua(5))
