function phoneNum(num){
    let str = num.toString();
    return (`${str.substring(0, 3)}-${str.substring(3, 6)}-${str.substring(6)}`);
}

console.log(phoneNum(1234567890))