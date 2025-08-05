let num = 8  //Number(prompt("Enter the number"));

let res= (num % 2 === 0) ? ("Even Number") : ("Odd number");
console.log(res)

let x = 5
x += 3;
x -= 2;
x *= 4;
x /= 6;
x %= 3;
console.log(x);

let num=12;
let result=(num>=10 && num<=20)? ("Yes") : ("Nooooo");
console.log(result)

let a=15,b=13,c=2;
let ans = (a>b) ? ((a>c) ? a : c) : ((b>c) ? b :c);
console.log(ans)

let username = "Vignesh";
let password = "vig@123";

let databaseUserName = "Vignesh"
let databasePassword = "vig@123"

let res = (username && password && username===databaseUserName && password===databasePassword) 
            ? 
            "Login Sucessfull" 
            : 
            "Invalid Username or Password";

  console.log(res)
