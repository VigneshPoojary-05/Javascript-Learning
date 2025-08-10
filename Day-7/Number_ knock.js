let compuerNumber = 85;
let guess;

while(guess!==compuerNumber){
    guess=85;
    if(isNaN(guess)){
        console.log("Number is invalid,please try again!");
    } else if(guess < compuerNumber){
        console.log("Number is too low, try again")
    } else if(guess > compuerNumber){
        console.log("Number is too high, try again")
    } else {
        console.log("Your guess is correct!!");
    }
}