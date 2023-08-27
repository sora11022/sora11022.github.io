let n = 6

function testSNT(){
    for(let i = 2;i < n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

let a = testSNT(n)
console.log(a)