// get products from the adminpage(pull items)
// you need a an empty array for the items
let purchaseditems = []
let main = document.querySelector('main')
// get products from the localstorage in order for the products on the page to depent on what is shown  or removed in the admin page.

let products = JSON.parse(localStorage.getItem('products'))
// for every object in the array you must include a div for for all items
main.innerHTML =  products.map(function(item, index){
     
    return `
    <div>
        <h2>${item.name}</h2>
        <p><img src = '${item.url}'></p>
        <p>${item.description}</p>
        <p>${item.price}</p>

        <button value = '${index}' data-add>Add to cart</button>
    </div>
`

   
}).join('')     // .join to remove random comma's that are random.

// create an function to add products to the cart.
function add(index){
    purchaseditems.push(products[index])
    localStorage.setItem('purchaseditems',JSON.stringify(purchaseditems))
}

// add an eventlistener to the add button.
main.addEventListener('click',function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button')
        add(event.target.value)     //the line will  add the function to  (data-add ) to all buttons in the main
    }
})

    