let products = [
    {
        id: 1,
        name: "Laptop",
        price: 23000
    },
    {
        id: 2,
        name: "Phone",
        price: 89000
    },
    {
        id: 3,
        name: "Headphone",
        price: 45000
    }
];

let listProduct = products.map(p=>{
    return ` \t <li> ${p.name} = ${p.price} </li> \n`
})

let productList = ` <ul>\n ${listProduct.join("")} \n</ul> `;
console.log(productList)