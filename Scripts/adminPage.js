// Admin page  = localStorage and Product page is pulling from localStorage

// Create an empty array to store all the items.
let products = [];

// now create an object for the products in order to make a constructor.
function MyItems( name, description, price, size, url) {
    // this.Id = Id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.size = size;
    this.url = url;
}

// create a new contructor for each of the items.
let myItem1 = new MyItems( "Cargo Skirt", "Black Wovan Cargo Skirt", 499.99, " 6 , 8 , 10 , 12"  , 'https://i.postimg.cc/qv0zNhWD/Woman-s-Black-Wovan-Catgo-Skirt.png')

let myItem2 = new MyItems("Cargo Pant", "Cream Cargo Pants", 449.99, " 6 , 8 , 10 , 12"  , 'https://i.postimg.cc/tJSh6DR9/Cargo-Pants.png')

let myItem3 = new MyItems( "Mini skirt", "Black Anantomy Utility Skirt" , 349.99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/5NtyyLHN/Black-Anatomy-utility-skirt.png" )

let myItem4 = new MyItems("Denim Skirt", "Black Maxi Denim Skirt with slit", 37999, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/dVNwfxn8/black-skirt-styled.png" )

let myItem5 = new MyItems("Maxi Dress", "Cream Rib Johnny collar sleeveless dress", 299.99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/T1cJ2m4X/Rib-Johnney-collar-Sleeveless-Dress-1.png" )

let myItem6 = new MyItems("Black Dress", "Soft slip Maxi Dress", 199.99, "6, 8, 10, 12", "https://i.postimg.cc/rFBZhC2f/Soft-maxi-slip-dress.png" )

// Push the items into an array.
products.push(myItem1,myItem2,myItem3,myItem4,myItem5,myItem6)

//  Store the items in localstorage is the next step - items cannot be stored without adding a json.stringyfy.
localStorage.setItem("products", JSON.stringify(products))

// now turn string into an array and set the items from localstorage into an array.
products = JSON.parse(localStorage.getItem("products"))

// create a table and ensure that your html admin page has a table containing the products and their associated properties.
// use .map function to loop through the array and write the information
// use QuerySelector to display the table in html 

let table = document.querySelector('table')

// Function to generate table rows for each product
window.onload = function thisFunction() {
    let theseItems = products.map(function(item, index){ 
        console.log(item)
        console.log(index)
        return `
         <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td>${item.description}</td>
                <td><img src="${item.url}" style="max-width: 100px;"></td>
                <td><button>Edit</button></td>
                <td><button class='delete' value='${index}'>Del</button></td>
            </tr>
        `
    })
    
    function remove(position){
        products.splice(position,1)
        favourite()
        thisFunction()
    }

    table.innerHTML = theseItems.join('')

}


function favourite(){
    localStorage.setItem('products',JSON.stringify(products))
    products = JSON.parse(localStorage.getItem('products'))
}





   


    // You will need an event listener for the delete button
    table.addEventListener('click', function () {
        if (event.target.classList.contains('delete')) {
            remove(event.target.value)
            // Perform delete operation for the product at the given index
            products.splice(index, 1)
            // Update the localStorage after deletion
            localStorage.setItem("products", JSON.stringify(products));
            // Regenerate the table rows after deletion
            table.innerHTML = thisFunction(products)
        }
    });

