//  Propery Method()
let btn1 = document.querySelector('.btn1')
btn1.onclick = ()=>{
    console.log("hello vignesh")
}

btn1.addEventListener('click',()=>{
    console.log('This is Click Event 1')
})

btn1.addEventListener('click',()=>{
    console.log('This is Click Event 2')
})

let showConsole =  function(){
    console.log('Helloo🔥🔥🔥🫵')
}

btn1.addEventListener('click',showConsole)
btn1.removeEventListener('click',showConsole)

// Event Object
btn1.addEventListener('click',(e)=>{
    console.log(e)
})


// // Mouse Events
let box = document.querySelector('.box')

btn1.addEventListener('mousedown',()=>{
    console.log('Mouse Down')
})

btn1.addEventListener('mouseup',()=>{
    console.log('Mouse Up')
})

box.addEventListener('mouseenter',()=>{
    console.log('Mouse Enter')
})

box.addEventListener('mouseleave',()=>{
    console.log('Mouse Leave')
})

box.addEventListener('mouseover',()=>{
    console.log('Mouse Enter')
})

box.addEventListener('mouseout',()=>{
    console.log('Mouse Leave')
})

box.addEventListener('contextmenu',()=>{
    console.log('heeeeeeee')
})

box.addEventListener('auxclick',()=>{
    console.log('hoooooo')
})


// Form Event
let nameInput = document.querySelector('.name')
let form = document.querySelector('form')
let submitBtn = document.querySelector('.submitBtn')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("submitted")
})

nameInput.addEventListener('focus',()=>{
    console.log('Focused')
})
nameInput.addEventListener('blur',()=>{
    console.log('Blured')
})