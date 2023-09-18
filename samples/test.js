function uniqueStr(str){
    let longestStr = ""
    let curStr = ""

    for (let i = 0; i < str.length; i++){
        const char = str[i];
    // lấy các ký tự của char nếu trong chuỗi curStr k bị trùng
        if (!curStr.includes(char)){
            curStr += char;
        }
    // gán chuỗi curStr vào longestStr nếu ký tự của curStr > longestStr
        if (longestStr.length < curStr.length){
            longestStr = curStr;
        }
    }
    return longestStr;
}
console.log(uniqueStr('bcdcdefgdmn'));