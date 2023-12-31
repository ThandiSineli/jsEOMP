// pull from product page, call table from the html
let purchaseditems = JSON.parse(localStorage.getItem('purchaseditems')) || [];
let table = document.querySelector('#checkoutTable');
let totalAmountElement = document.querySelector('#totalAmount');

// display the array of purchased items in a table on the checkout page
function displayCheckout() {
    let tableContent = '';

    if (purchaseditems.length === 0) {
        tableContent = '<tr><td colspan="5">No items in the cart</td></tr>';
    } else {
        tableContent = `
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
            </tr>
        `;
// loop through the array and display the details 
        purchaseditems.forEach(item => {
            tableContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>R${item.price}</td>
                    <td>${item.quantity}</td>
                    <td><img src='${item.url}' alt='Product Image'> </td>
                   

                </tr>
            `;
        });
    }

    table.innerHTML = tableContent;

    let totalAmount = purchaseditems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalAmountElement.textContent = `Total Amount: R${totalAmount.toFixed(2)}`;
}

window.onload = function() {
    displayCheckout();
};

// Get the reference to the purchase button element
let purchaseButton = document.getElementById('purchaseBtn');

// Add a click event listener to the purchase button
purchaseButton.addEventListener('click', function() {
    // This code will run when the purchase button is clicked
    alert('Thank you for your purchase!');
  
});


