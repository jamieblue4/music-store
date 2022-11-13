// Variables
const resetButton = document.querySelector('#reset');
const submitButton = document.querySelector('#signup');
const logoutButton = document.querySelector('#logout-button');
const greeting = document.querySelector('#greeting');
const form = document.querySelector('form');
const addToCartButtons = document.querySelector('.shop-buttons');

//Signup Functions
form.addEventListner('click', function(e) {
    e.preventDefault();
});

submitButton.addEventListener('click', function(e) {
    let name = document.querySelector('#username').value;
    name = localStorage.setItem('name', name);

    nameDisplayCheck();
});

submitButton.addEventListener('keypress', function(e) {
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
