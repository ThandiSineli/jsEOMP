// Admin page  = localStorage and Product page is pulling from localStorage
// can use bootsrap to create a modal

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

let myItem4 = new MyItems("Denim Skirt", "Black Maxi Denim Skirt with slit", 379.99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/dVNwfxn8/black-skirt-styled.png" )

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
function displayProducts() {
    let theseItems = products.map(function(item, index) {
        return `
            <tr>
            <td>${index +1}</td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td>${item.description}</td>
                <td class=""><img src="${item.url}" style="width: 50px;"></td>
                <td><button class='edit' value='${index}'>Edit</button></td>
                <td><button class='delete' value='${index}'>Del</button></td>
            </tr>
        `;
    });

    table.innerHTML = theseItems.join('');
}

// Function to remove a product at a given position
function removeProduct(position) {
    products.splice(position, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(); 
}

// Display products when the window loads
window.onload = function() {
    displayProducts();
};

// set up an eventhandler to the table so it can remove a certain item when triggered.
table.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        // get items to delete from the list of 
        let index = event.target.value; 
        removeProduct(index); 
    }
});

// editing button returns a  (modal)
// modal can be opened by clicking on the edit button to edit the product.

// modal function
function openModal(index) {
    let modal = document.getElementById('myModal');
    
    let span = document.getElementsByClassName('close')[0];
    let product = products[index];

    modal.style.display = 'block'; 

    // the inputs to be refilled in the modal
    document.getElementById('editName').value = product.name;
    document.getElementById('editDescription').value = product.description;
    document.getElementById('editPrice').value = product.price;

    // this removes the modal(X)
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when the user clicks outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Update the product details when the user submits the form
    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault();
        product.name = document.getElementById('editName').value;
        product.description = document.getElementById('editDescription').value;
        product.price = document.getElementById('editPrice').value;

        // Close the modal
        modal.style.display = 'none'; 
        localStorage.setItem('products', JSON.stringify(products)); // Update local storage
        displayProducts(); 
    });
}

// Event listener for the edit button open the modal to edit certain products
table.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
        let index = event.target.value;
        openModal(index); 
    }
});
