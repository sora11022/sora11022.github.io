const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
  ];

const groupData = [];
for(let item of team){
    if(!groupData[item.country]){
        groupData[item.country] = {name: item.name, country: item.country}
    }
}
console.log(groupData);