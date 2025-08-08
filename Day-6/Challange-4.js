let num1=5;
let num2=3;
let operaator="**";

switch(operaator){
    case "+" :
        console.log(`Addition ${num1+num2}`);
        break;
    case "-" :
        console.log(`Substraction ${num1-num2}`);
        break;
    case "*" :
        console.log(`Multiplication ${num1*num2}`);
        break;
    case "/" :
        console.log(`Division ${num1/num2}`);
        break;
    case "%" :
        console.log(`Modulo Division ${num1%num2}`);
        break;
    case "**" :
        console.log(`Exponenstion ${num1**num2}`);
        break;
    default : console.log("Invalid")
}