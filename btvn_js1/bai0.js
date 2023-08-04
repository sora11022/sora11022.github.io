let n = 13

function testSNT(){
if (n == 1){
    return false;
} else if (n == 2){
    return true;
} else{
    for(let i = 2;i < n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}
}
let a = testSNT(n)
console.log(a)