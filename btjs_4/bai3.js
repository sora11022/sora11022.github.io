const arr = new Array(100)
arr.fill(0)
for (i = 0; i < 100; i++){
   arr[i] = i
}

const filterArr = arr.filter(num => num % 5 === 0);
const sum = filterArr.reduce((accumulator, currentValue) => {
   return accumulator + currentValue
},0);
console.log("new array",arr);
console.log("divided by 5:",filterArr);
console.log("sum:",sum);
