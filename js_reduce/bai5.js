const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

let newArr = arr1.reduce((pre, cur) =>{
    if(!arr2.includes(cur)){
        pre.push(cur)
    }
    return pre;
}, []);
arr2.forEach(cur => {
    if(!arr1.includes(cur)){
        newArr.push(cur)
    }
})
console.log(newArr);