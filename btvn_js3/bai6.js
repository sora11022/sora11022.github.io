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