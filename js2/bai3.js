let str = 'ab1k2p3das245';
let split_str = str.match(/\d/g);

function tong(split_str){
    let tong = 0;
    for( let i = 0; i<split_str.length;i++){
        tong += parseInt(split_str[i]);
    }
    return tong;
}
console.log(tong(split_str))
