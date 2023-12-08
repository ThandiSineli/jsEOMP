let purchaseditems = JSON.parse(localStorage.getItem('purchaseditems')) || [];
let main = document.querySelector('main');
let products = JSON.parse(localStorage.getItem('products'));

function displayProducts(items) {
    main.innerHTML = items.map((item, index) => {
        return `
            <div class="col-md-4 mb-3" style="width: 100%">
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


