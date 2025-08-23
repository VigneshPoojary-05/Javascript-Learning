let listContainer = document.querySelector('.listContainer')

listContainer.addEventListener('click',(e)=>{
    if(e.target.className === 'listItem'){
        e.target.style.textDecoration='line-through'
    }
})