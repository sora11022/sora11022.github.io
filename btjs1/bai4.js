 function fib(n){
    if(n == 1){
        return [0];
    }
    if(n == 2){
        return [0, 1];
    }
    let fibSequence = [0, 1];
    for (i = 2; i < n; i++){
        fibSequence.push(fibSequence[i - 1]+ fibSequence[i - 2]);
    }
    return fibSequence;
}
const n = 1;
const fibResult = fib(n);
console.log(fibResult)
