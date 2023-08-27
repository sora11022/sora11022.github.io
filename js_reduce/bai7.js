const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const result = arrCount.reduce((pre, cur) =>{
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
}, {})
console.log(result);
