// Signup Variables
const resetButton = document.getElementById('reset');
const submitButton = document.getElementById('signup');
const logoutButton = document.getElementById('logout-button');
const greeting = document.getElementById('greeting');
let form = document.getElementById('form');

//Signup Functions
if (form) {
form.addEventListener('click', function(e) {
    e.preventDefault();
});
console.log("we're good to go :)");
}

if (submitButton) {
submitButton.addEventListener('click', function(e) {
    let name = document.getElementById('username').value;
    name = localStorage.setItem('name', name);

    nameDisplayCheck();
});
}

if (submitButton) {
submitButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter');
    let name = document.getElementById('username').value;
    name = localStorage.setItem('name', name);

    nameDisplayCheck();
});
}

if (logoutButton) {
logoutButton.addEventListener('click', function() {
    let name = localStorage.getItem('name');
    localStorage.removeItem('name');
    
    nameDisplayCheck();
});
}

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        greeting.textContent = `Welcome, ${name}!`;
    } else {
        greeting.textContent = `You're all signed out.`;
    }
};

//Add to cart Functions and Shop Section
var shop = document.querySelector('.shop-container');

var shopItems = [
    {
        name: 'Best Seller',
        price: 14.99,  
    },
    {
        name: 'Sale',
        price: 8.99,
    },
    {
        name: 'New Arrival',
        price: 19.99,
    }
];
console.log(shopItems);

var cartItems = [];
var addItem = document.querySelectorAll('.add-to-cart-button');
var cartItemName = document.getElementsByClassName('cart-name');
var cartItemPrice = document.getElementsByClassName('cart-price');
var cartItemQuantity = document.getElementsByClassName('cart-quantity');

function addToCart() {
    addItem = cartItems;
    updateCart();
    updateCartTotal();
}

function updateCart() {
    cartItems.appendChild
    updateCartTotal();
}

function updateCartTotal() {

}