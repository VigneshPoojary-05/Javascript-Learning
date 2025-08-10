function capitalizedFirstLettr(str){
    console.log(str.charAt().toUpperCase()+str.slice(1))
}
capitalizedFirstLettr("vignesh");

setTimeout(() => {
    console.log("please login")
}, 5000);

let cal = (price,discount)=>{
    let result=price-(price*discount/100);
    return result
}
let finalResult = cal(1000,50)
console.log(finalResult)


function generateUsername(fullname){
    return "@"+fullname
}
console.log(generateUsername("vignesh"))


function signal(color){
    if(color==="red"){
        console.log("stop")
    } else if(color==="yellow"){
        console.log("get ready")
    } else if(color==="green"){
        console.log("go")
    } else {
        console.log("Invalid color")
    }
} 
signal("green");