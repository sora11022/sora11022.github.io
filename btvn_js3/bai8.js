function replaceStr(str, targetStr, replacementStr){
    let resultStr = str.replace(new RegExp(targetStr, 'g'), replacementStr);
    return resultStr;
}

let str = "Hello, world";
let targetStr = "world";
let replacementStr = "universe";
let output = replaceStr(str, targetStr, replacementStr);
console.log(output)
console.log(str)