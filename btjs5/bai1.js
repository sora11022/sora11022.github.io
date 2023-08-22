const cart = [
  {
    title: "DẾ MÈN PHIÊU LƯU KÝ",
    price: 50000,
    quantity: 2,
  },
  {
    title: "KIM ĐỒNG",
    price: 40000,
    quantity: 7,
  },
  {
    title: "NGỌN LỬA ĐÊM BA MƯƠI",
    price: 21000,
    quantity: 4,
  },
  {
    title: "CÔ BÉ GANH TỊ",
    price: 27500,
    quantity: 5,
  },
];

let totalPayment = 0;
for (const item of cart){
    totalPayment += item.price * item.quantity;
}
console.log(totalPayment);