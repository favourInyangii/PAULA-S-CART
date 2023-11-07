let iconCart = document .querySelector('.icon-cart');
let closeCart= document .querySelector('.close');
let body = document .querySelector('body');
let listproductHTML = document .querySelector('.listproduct');

let listproducts = [];
iconCart.addEventListener('click',() =>{
    body.classList.toggle('showCart')
})
closeCart .addEventListener('click',()=>{
    body.classList.toggle('showCart')
})




const initApp =() =>{
//get data from json
fetch('products.json')
.then(response => response.json())
.then(data =>{
    listproducts = data;
})
console.log(listproducts);
}
initApp();