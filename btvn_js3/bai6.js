function wordCount(str){
    let count = 0;
    let isWord = false;
    for(let i = 0; i<str.length; i++){
        if(str[i] !== ' ' && !isWord){
            isWord = true;
            count++;
        } else if(str[i] === ' '){
            isWord = false;
        }
    }
    return count;
}

console.log(wordCount("This is a sentence."))
//cach 1



let strs = "This is a sentence."
let wordsCount = strs.split(" ").length;
console.log(wordsCount)
//cach 2