function checkStr(str){
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (str.indexOf(char) === str.lastIndexOf(char)){
            return i;
        }
    }
    return -1
}
let str = "aabb"
let result = checkStr(str);
console.log(`${result}`)
