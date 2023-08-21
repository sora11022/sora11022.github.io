const arr = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
]
const groupData = {};
for(let item of arr){
    if(!groupData[item.name]){
        groupData[item.name] = {name: item.name, count: 0};
    }
    groupData[item.name].count += item.count;
}
const result = Object.values(groupData)
console.log(result);
