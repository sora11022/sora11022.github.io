function charCount(str, char){
    let count = 0;
    for (let i = 0; i<str.length; i++){
        if(str[i] === char){
            count++
        }
    }
    return count;
}

let str = "programming"
let char = "q"
console.log(charCount(str, char))