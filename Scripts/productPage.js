// pull from the product page  and create a new function
let purchaseditems = JSON.parse(localStorage.getItem('purchaseditems')) || [];
let main = document.querySelector('main');
let products = JSON.parse(localStorage.getItem('products'));

function displayProducts(items) {
    main.innerHTML = items.map((item, index) => {
        return `
            <div class="col-md-4 col-lg-4 mb-3 mx-4" style="width: 100%">
                <div class="card">
                    <img src="${item.url}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <p>${item.price}</p>
                        <button class="btn btn-dark add-to-cart" data-index="${index}">Add to cart</button>
                    </div>
                </div>
            </div>`;
    }).join('');

    
//    add an eventlistener to add button so that it appears on the checkout page when it functions
    let addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            let index = event.target.getAttribute('data-index');
            addProductToCart(index);
        });
    });
}

function addProductToCart(index) {
    let productToAdd = products[index];
    let existingItem = purchaseditems.find(item => item.name === productToAdd.name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        productToAdd.quantity = 1;
        purchaseditems.push(productToAdd);
    }

    localStorage.setItem('purchaseditems', JSON.stringify(purchaseditems));
    loadCheckout();
}

function loadCheckout() {
    // Redirect to the checkout page or update its content based on purchaseditems
}

window.onload = function() {
    displayProducts(products);
};

document.getElementById('searchBtn').addEventListener('click', function () {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = products.filter(item => 
        item.name.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
});

// Display all products initially (on window load)
window.onload = function() {
    displayProducts(products);
};

