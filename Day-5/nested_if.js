//  let age = 18;
//  let hasLicence = false;

//  if(age>=18){
//     if(hasLicence){
//         console.log("SYou Can Drive")
//     } else {
//         console.log("SYou Cant Drive")
//     }
//  } 
//  else {
//     console.log("Your age is small")
//  }

let username = "vignesh";
let password = "vign@134";

let dbusername = "vignesh";
let dbpassword = "vign@134";

// if(username){
//     if(password){
//         if(username === dbusername){
//             if(password === dbpassword){
//                 console.log("Login Sucessfully Done")
//             } else {
//                 console.log("Password not MAtched!!");
//             }
//         } else {
//             console.log("Username Not Matched!!")
//         }
//     } else {
//     console.log("Password Required!!")
// }
// } else {
//     console.log("Username Required!!")
// }

// if(username && password && username===dbusername && password===dbpassword){
//     console.log("Login Sucessfull")
// }else{
//     console.log("Username or Password Not Matched");
// }

let res = (username==="" && password==="") ? ("Username and Password Required!!") : ((username===dbusername && password===dbpassword) ? ("Login Sucessfull") : ("Username or Password Not Matched"));
console.log(res)