let num=30;

if(num%5===0 && num%3===0) {
    console.log("FizzBuzz")
} else if(num%5===0) {
    console.log(`buzz`);
} else if (num%3===0){
    console.log(`fizz`);
} else {
    console.log("Not divisible")
}

let res = (num%5===0 && num%3===0) ? ("FizzBuzz") : ((num%5===0) ? (`buzz`) : ((num%3===0) ? (`fizz`) : ("Not divisible")));
console.log(res)