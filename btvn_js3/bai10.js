function orderStr(str){
    let charArray = str.split("");
    charArray.sort();
    let newStr = charArray.join("");
    return newStr;
}
let str = "oppenheimer"
console.log(str)
console.log(orderStr(str))