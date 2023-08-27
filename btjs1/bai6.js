function isSHT(n){
    if (n <= 0){
        return false;
    }
    let sumSHT = 0;
    for (i = 1; i< n; i++){
        if(n % i == 0){
            sumSHT += i
        }
    }
    return sumSHT == n
}
const n = 6;
if (isSHT(n)){
    console.log(n +' la SHT')
} else{
    console.log(n +' k phai SHT')
}

