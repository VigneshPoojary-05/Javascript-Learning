// Question 1

let p =  document.createElement('p');
p.innerText = "Vignesh Poojary";
// p.style.backgroundColor = "black"
// p.style.color = "lightgreen"
// p.style.padding = "5px"
p.setAttribute('style', 'background-color:black; color:lightgreen; padding:5px')

let body = document.querySelector('body')
body.append(p)



// Question 2

let btn =  document.createElement('button');
btn.innerText = "click me";
p.prepend(btn)


// Question 3

let box1 = document.querySelector('.box1')
let box = box1.setAttribute('class', `${box1.getAttribute('class')} box2`)



// Challenge 1


function changeTagName(oldNode, newTagName){
    if(oldNode instanceof Element){
        let newNode = document.createElement(newTagName)
        newNode.innerHTML = oldNode.innerHTML;

        for(let attr of oldNode.attributes){
            newNode.setAttribute(attr.name,attr.value)
        }

       oldNode.replaceWith(newNode)

    } else {
        console.log("invalid node")
    }
}
let div = document.querySelector('.box')
changeTagName(div, 'a')


