const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
];
const group = team.reduce((pre, cur) =>{
    const country = cur.country;
    if(!pre[country]){
        pre[country] = [];
    }
    pre[country].push(cur);
    return pre
}, {});

console.log(group);