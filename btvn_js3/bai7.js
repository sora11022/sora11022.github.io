function palindrome(str){
    for(let i = 0; i<str.length; i++){
        if (str.split("").reverse().join("") === str){
            return true;
        }
    }
    return false;
}
console.log(palindrome("madam"))