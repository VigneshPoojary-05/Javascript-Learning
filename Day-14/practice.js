// Cart Program
let decBtn = document.querySelector('.decBtn')
let incBtn = document.querySelector('.incBtn')
let counterValue = document.querySelector('.counterValue');

decBtn.addEventListener('click',()=>{
    let value = counterValue.innerText;
    if(value<=1){
        return
    } else {
        counterValue.innerText = Number(value)-1
    }
})

incBtn.addEventListener('click',()=>{
    counterValue.innerText = Number(value)+1
})