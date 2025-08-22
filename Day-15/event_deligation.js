let container = document.querySelector('.container')
container.childNodes.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        console.log(elem.innerText)
    })
})

container.addEventListener('click',(e)=>{
    if(e.target.className === 'box'){
        console.log(e.target.textContent)
    }
})