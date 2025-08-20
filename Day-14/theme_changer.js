let btn = document.querySelector('button');
let body = document.querySelector('body');
let mode = "light"

btn.addEventListener('click',()=>{
    if(mode === 'light'){
        body.style.backgroundColor="black";
        body.style.color="white";
        mode= "black"
    } else {
        body.style.backgroundColor="white";
        body.style.color="black";
        mode= "light"
    }
})


// Using CSS Class

btn.addEventListener('click',()=>{
    if(body.className === 'light'){
        body.className='dark'
    } else {
        body.className='light'
    }
})


// // Using Toggle() Method
btn.addEventListener('click',()=>{
    body.classList.toggle('dark')
})
