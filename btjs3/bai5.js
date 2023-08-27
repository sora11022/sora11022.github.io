function title(str){
    let convert = str.toLowerCase().split(' ');
    let result = convert.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    });
    return result.join(' ');
}
console.log(title("welcome to javascript")) 