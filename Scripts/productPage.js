// Fetch items from localStorage
let items = JSON.parse(localStorage.getItem('item')) || [];

// Display items on the product page
let main = document.querySelector('main');
main.innerHTML = items.map(function (item, index) {
    return `
        <div>
            <h2>${item.name}</h2>
            <p><img src='${item.url}'></p>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button value='${index}' data-add>Add to cart</button>
        </div>
    `;
}).join('');

// Function to add an item to the cart
function add(index) {
    let purchased = JSON.parse(localStorage.getItem('purchased')) || [];
    purchased.push(items[index]);
    localStorage.setItem('purchased', JSON.stringify(purchased));
}

// Event listener for adding items to the cart
main.addEventListener('click', function () {
    if (event.target.hasAttribute('data-add')) {
        add(event.target.value);
    }
});

