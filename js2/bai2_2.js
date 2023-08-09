const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
  ]

let treCon = 0
let thanhNien = 0
let nguoiGia = 0
for(let i = 0; i<listPersons.length; i++){
    if(listPersons[i].age >= 30){
        nguoiGia++
    } else if(listPersons[i].age <= 30 && listPersons[i].age >= 18){
        thanhNien++
    } else {
        treCon++
    }
}
const myObject = {
    tre_con: treCon, 
    thanh_nien: thanhNien,
    nguoi_gia: nguoiGia
}
console.log(myObject)