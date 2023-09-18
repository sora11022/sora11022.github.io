function uniqueStr(str){
    let longestStr = ""
    let curStr = ""

    for (let i = 0; i < str.length; i++){
        const char = str[i];
    // kiem tra xem neu ky tu bi lap thi reset luon str
        if (curStr.includes(char)){
            curStr = "";
        }

        curStr += char;

        if (longestStr.length < curStr.length){
            longestStr = curStr;
        }
    }
    return longestStr;
}
console.log(uniqueStr('aaabdcdghd'));