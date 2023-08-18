function palindrome(str){
        if (str.split("").reverse().join("") === str){
            return true;
        }
    return false;
}
console.log(palindrome("Madam"))