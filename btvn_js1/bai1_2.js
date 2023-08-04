let n = 30;

function testSNT(n){
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
    for (i = 1; i <= n; i++){
        if(testSNT(i) == true){
            console.log(i)
        }
    }