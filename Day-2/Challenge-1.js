// Item Price = 150/- Quantity =3

let pricePerItem = 150;
let quantity = 3;
let totalPrice = pricePerItem*quantity;
let discount = totalPrice*(10/100);
let discountprice =totalPrice-discount;

console.log("Price Per Item : ",pricePerItem);
console.log("Total Quantity : ",quantity);
console.log("Total Price :",totalPrice);
console.log("Discount : ",discount);
console.log("Final Discount : ",discountprice)