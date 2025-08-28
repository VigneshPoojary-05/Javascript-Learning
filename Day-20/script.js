function greetHello(){
    return 'hello';
}
function greetNamaste(){
    return 'Namaste';
}

function greetWithName(fn,name){
   return fn() + ' ' + name;
}
let res = greetWithName(greetNamaste,'Vignesh');
console.log(res)