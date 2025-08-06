let cartValue = 260;
let discountCartValue;

if(cartValue<50){
    discountCartValue=cartValue;
    console.log("No discount applied")
} else if(cartValue >=50 && cartValue<=100) {
    discountCartValue = cartValue - (cartValue*(10/100));
    console.log("Applied 10% discount")
} else {
    discountCartValue = cartValue - (cartValue*(20/100));
    console.log("Applied 20% discount")
}

console.log(`The final cart discount is :${discountCartValue}`)