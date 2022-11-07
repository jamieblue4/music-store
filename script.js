const resetButton = document.querySelector('#reset');
const form = document.querySelector('form');
const submitButton = document.querySelector('#signup');
const logoutButton = document.querySelector('#logout-button');
const greeting = document.querySelector('#greeting');

//Functions
submitButton.addEventListener('click', function() {
    e.preventDefault();
    let name = document.querySelector('#username').value;
    name = localStorage.setItem('name', name);

    nameDisplayCheck();
});

submitButton.addEventListener('keypress', function(e) {
    e.preventDefault();
    if (e.key === 'Enter');
    let name = document.querySelector('#username').value;
    name = localStorage.setItem('name', name);

    nameDisplayCheck();
});

logoutButton.addEventListener('click', function() {
    let name = localStorage.getItem('name');
    localStorage.removeItem('name');
    
    nameDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        greeting.textContent = `Welcome, ${name}!`;
    } else {
        greeting.textContent = `You're all signed out.`;
    }
};

//Add to cart section
let carts_button = document.querySelectorAll('.add-to-cart-button');

for (var i = 0; i < carts.length; i++) {

}

carts_button.addEventListener('click', addToCart);

function addToCart(e) {

}

function cartRender() {

}