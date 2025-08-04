let age =8;
let result=age >=28 ? "Eligible for Booking" : "Not Eligible fot booking";
console.log(result)

let username="a";
let password="";
const res=(username || password)?("Login sucessfull"):("Login Unsucessfull");
console.log(res);

let un="a";
let pas="";
const resultt=(un && pas)?("Login sucessfull"):("Login Unsucessfull");
console.log(resultt);


let a=5,b=2,c=12;
let ans = a>b? (a>c ?a : c):(b>c?b:c)
console.log(ans)