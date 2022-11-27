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

const product = [
    {
        id: 0,
        name: 'Best Seller',
        price: 14.99,  
    },
    {
        id: 1,
        name: 'Sale',
        price: 8.99,
    },
    {
        id: 2,
        name: 'New Arrival',
        price: 19.99,
    }
];


function addToCart(id) {
  console.log(id);
}
