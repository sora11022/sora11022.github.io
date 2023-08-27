const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flatten(arrFlat){
    return arrFlat.reduce((pre, cur) =>{
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, []) 
}
console.log(flatten(arrFlat));