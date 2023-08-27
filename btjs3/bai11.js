function camelCase(str){
    return str.replace(/\W+(.)/g, function(match, firstLetter) {
        return firstLetter.toUpperCase();
    });
}
console.log(camelCase("hello world of programming"))