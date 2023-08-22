const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

let difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log(difference);