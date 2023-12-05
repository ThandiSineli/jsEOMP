// Admin page  = localStorage and Product page is pulling from localStorage

// Create an empty array to store all the items.
let products = [];

// now create an object for the products in order to make a constructor.
function myItems( name, description, price, size, url) {
    // this.Id = Id;
    this.Name = name;
    this.Description = description;
    this.Price = price;
    this.Size = size;
    this.Url = url;
}

// create a new contructor for each of the items.
let myItem1 = new contructor( "Cargo Skirt", "Black Wovan Cargo Skirt", 499.99, " 6 , 8 , 10 , 12"  , 'https://i.postimg.cc/qv0zNhWD/Woman-s-Black-Wovan-Catgo-Skirt.png')

let myItem2 = new contructor("Cargo Pant", "Cream Cargo Pants", 449.99, " 6 , 8 , 10 , 12"  , 'https://i.postimg.cc/tJSh6DR9/Cargo-Pants.png')

let myItem3 = new contructor( "Mini skirt", "Black Anantomy Utility Skirt" , 349.99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/5NtyyLHN/Black-Anatomy-utility-skirt.png")

let myItem4 = new constructor("Denim Skirt", "Black Maxi Denim Skirt with slit", 379,99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/dVNwfxn8/black-skirt-styled.png")

let myItem5 = new constructor("Maxi Dress", "Cream Rib Johnny collar sleeveless dress", 299,99, " 6 , 8 , 10 , 12" , "https://i.postimg.cc/T1cJ2m4X/Rib-Johnney-collar-Sleeveless-Dress-1.png")

let myItem6 = new constructor("Black Dress", "Soft slip Maxi Dress", 199,99, "6, 8, 10, 12", "https://i.postimg.cc/rFBZhC2f/Soft-maxi-slip-dress.png")

// Push the items into an array.
products.push(myItem1,myItem2,myItem3,myItem4,myItem5,myItem6)

//  Store the items in localstorage is the next step - items cannot be stored without adding a json.stringyfy.
localStorage.setItem("products", JSON.stringify(products))

// now turn string into an array and set the items from localstorage into an array.
products=JSON.parse(localStorage.getProduct("products"))

// create a table and ensure that your html admin page(th-mainly headings) has a table containing the products and their associated properties.
// use .map function to loop through the array.
// use QuerySelector to display the table in html and .map to write the information.
let table = document.querySelector('table')

