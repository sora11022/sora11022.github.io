function splitName(str){
    let componentStr = str.split(' ');
    let ho = componentStr[0];
    let ten = componentStr[componentStr.length - 1];
    let tenDem = componentStr.slice(1, componentStr.length - 1).join(' ');
    const myObj = {
        ho_user: ho,
        tendem_user: tenDem,
        ten_user: ten
    }
    return myObj;
}
console.log(splitName("Nguyễn Văn A"))