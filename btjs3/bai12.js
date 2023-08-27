function permuteStr(str){
    function backtrack(start){
        if (start === str.length){
            result.push(str.join(''));
            return;
        }
        for(let i = start; i < str.length; i++){
            [str[start], str[i]] = [str[i],str[start]];
            backtrack(start + 1);
            [str[start], str[i]] = [str[i],str[start]];
        }
    }
    let result = [];
    str = str.split('');
    backtrack(0);
    return result;
    
}
console.log(permuteStr("abc")) 

