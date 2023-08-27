function resultStr(str){
    let longestStr = "";
    for (let i = 0;i<str.length;i++){
        let currentStr = "";
        for (let j = i; j < str.length; j++){
            if (currentStr.includes(str[j])){
                break;
            }
            currentStr += str[j];
        }
        if(currentStr.length > longestStr.length){
            longestStr = currentStr;
        }
    }
    return longestStr;
}
console.log(resultStr("abcaabbccd"))