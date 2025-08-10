let password="vign123"
let userPassword=null;
let noOfAttempt=0;

while(password!==userPassword && noOfAttempt<=3){
    userPassword=prompt("Enter the password")
    noOfAttempt++

    if(password===userPassword){
        alert("Your password is matched")
    } else if(noOfAttempt>=3){
        alert("Your attempt over")
    } else {
        alert("passwod not matched")
    }
}
