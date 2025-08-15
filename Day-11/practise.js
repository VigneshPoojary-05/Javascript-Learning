let person = {
    name:"Vignesh",
    age:19,
    city:"Kundapura"
}
person.email = "vignesh@2005"

for(let key in person){
    console.log(`Value of ${key} property is ${person[key]}`)
}

delete person.city

console.log(person)


//Question 2

let obj3 = {
    firstName:"Vignesh",
    middleName:"G",
    lastName:"Poojary"
}
let fullName = (fn)=>{
    return `${fn.firstName} ${fn.middleName} ${fn.lastName}`
}
console.log(fullName(obj3))

// Question 3

let person2 = {
    name:"Vignesh",
    age:19,
    city:"Kundapura",
    email:"vignesh@2005"
}
let obj = Object.keys(person2)
console.log(obj.length)


//Question 4

const users = [
    { name:"Allice", role:"admin" },
    { name:"Bob", role:"user" },
    { name:"Charlie", role:"admin" },
    { name:"Devin", role:"admin" }
];

function result(usr){
    let fltr = usr.filter((item)=>{
        return item.role ===  "admin"
    })
    let result = fltr.map((item)=>{
        console.log(item.name)
    })
    return result 
}
result(users)


//Question 5

const products = [
    { id:1, name:"iPhone 14" },
    { id:2, name:"Samsung Galexy" },
    { id:3, name:"Google Pixcel" },
];

function searchProduct(products,searchKeyword){
    let filterProduct = products.filter(item=>{
        return item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    })
    let result = filterProduct.map(item=>{
        console.log(item.name)
    })
}
searchProduct(products,'go')


//Question 6

const comments = [
    { postId:1,  text:'Great Post! '},
    { postId:2,  text:'Thanks! '},
    { postId:1,  text:'Very Helpful! '}
];

function groupByPost(comments){
    let grouprdComments={}
    
    comments.forEach(obj => {
        let {postId,text} = obj;
        if(grouprdComments.hasOwnProperty(postId)){
            grouprdComments[postId].push(text)
        } else {
            grouprdComments[postId] = [text]
        } 
    });
    console.log(grouprdComments)
}
groupByPost(comments)

//Question 7

const params = {
    search:"laptop",
    page:2,
    sort:"assending",
    gana:456
}

function createURL(params){
    // console.log(`search=${params.search}&page=${params.page}&sort=${params.sort}`)
    let url="";
    for(let key in params){
        url+=`${key}=${params[key]}&`
    }
    console.log(url.slice(0,url.length-1))
}
createURL(params)