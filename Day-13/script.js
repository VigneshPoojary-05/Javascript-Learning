let aa = document.querySelector('#main')
console.log(aa)

console.log(aa.childNodes)
console.log(aa.firstChild)



let h1 = document.querySelector('h1');
console.log(h1.tagName);
console.log(h1.nodeName);
h1.innerText = `vignesh    is   bad boy`
console.log(h1.innerText)
console.log(h1.textContent)
h1.innerHTML='<p>hello namsate!</p>'
console.log(h1.innerHTML)
console.log(h1.lastChild)


// Inserting elemets

let a = document.querySelector('div')
let para = document.createElement('p');
para.innerText="hello"

a.append(para)
a.prepend(para)
a.after(para)
a.before(para)
a.insertAdjacentElement("afterend",para)

a.remove()


let pn  = document.querySelector('#para2');
pn.style.backgroundColor = "yellow";

let parentNode = pn.parentNode;
parentNode.append(para)

let newElem = document.createElement('div');
newElem.innerText="gmm";
newElem.style.border = "2px solid black";
newElem.style.padding="5px"
parentNode.replaceChild(newElem, pn)

parentNode.insertBefore(newElem,pn)

let div = document.querySelector('.box');
console.log(div.getAttribute('title'))
console.log(div.setAttribute('id','random'))
console.log(div.attributes)
console.log(div.getAttribute('id'))

let classValue = div.getAttribute('class')
console.log(classValue)

div.setAttribute('class', `${classValue} random`)
console.log(div.attributes.class.value)