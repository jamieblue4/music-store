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
var cartItems = document.querySelector('.cart-container');
var total = document.querySelector('.cart-total');

const product = [
    {
        id: 0,
        name: 'Best Seller',
        price: 14.99,  
    },
    {
        id: 1,
        name: 'On Sale',
        price: 8.99,
    },
    {
        id: 2,
        name: 'New Arrival',
        price: 19.99,
    }
];

// empty cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id) {
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnits("plus", id);
    } else {
        const item = product.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
      }
      updateCart();
    }
 
// update cart
function updateCart() {
    renderCartItems();
    renderTotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderTotal() {
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
    });

    total.innerHTML = `
    Total: $${totalPrice.toFixed(2)}
    `
}

// render cart items
function renderCartItems() {
    cartItems.innerHTML = ""; // clear cart before proceeding
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-content">
            <h4 class="cart-name" onclick="removeItemFromCart(${item.id})">
            ${item.name}
            </h4>
            <h4 class="cart-price">
            ${item.price}
            </h4>
            <h4 class="cart-quantity">
            <div class="btn-minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            ${item.numberOfUnits}
            <div class="btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            </h4>
        </div>
            `;
    });
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let oldNumberOfUnits = item.numberOfUnits;

        if(item.id === id) {
            if(action === "minus" && item.numberOfUnits > 1) {
                oldNumberOfUnits--;
            } else if (action === "plus") {
                oldNumberOfUnits++;
            }
        }

        return {
        ...item,
        numberOfUnits: oldNumberOfUnits,
        };
    });
    updateCart();
}