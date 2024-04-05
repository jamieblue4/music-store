// Modal / cart logic
const modal = document.getElementById("cartModal");

var itemsInCart = document.getElementById("yourCartButton");
var shop = document.querySelector('.shop-container');
var cartItems = document.querySelector('.cart-container');
var total = document.querySelector('.cart-total');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Add to cart Functions and Shop Section
const product = [
    {
        id: 0,
        name: 'Abbey Road',
        price: 34.99,
    },
    {
        id: 1,
        name: 'Currents',
        price: 24.99,
    },
    {
        id: 2,
        name: 'Mr. Morale & the Big Steppers',
        price: 29.99,
    },
    {
        id: 3,
        name: 'Infinity On High',
        price: 19.99,
    }
];

// empty cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id) {
    // see if item is already in cart
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
    let totalPrice = 0; totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    total.innerHTML = `
    Total: $${totalPrice.toFixed(2)}
    (Items: ${totalItems})
    `
    itemsInCart.innerHTML = `Cart (${totalItems})`;
}

// render cart items
function renderCartItems() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-content" style="padding:1rem; display:inline;">
            <h4 class="cart-name" onclick="removeItemFromCart(${item.id})">
            ${item.name}
            </h4>
            <h4 class="cart-price" onclick="removeItemFromCart(${item.id})">
            $
            ${item.price}
            </h6>
            <div class="quantity" style="display: inline-block">
            Quantity
            <button type="button" id="btn-plus" class="btn btn-sm" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
            ${item.numberOfUnits}
            <button type="button" id="btn-minus" class="btn btn-sm" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
            </div>
            <button type="button" class="remove-button btn-md btn-danger" style="border-radius: 0.75em;" id="removeButton" onclick="removeItemFromCart(${item.id})">Remove</button>
        </div>
            `;
    }
    );
}

// change number of units function
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits;

// prevents quanity from falling below zero        
function decrementQuantity(numberOfUnits) {
    
    if(item.id === id) {
        if(action === "minus") {
            numberOfUnits--;
        }
        if (numberOfUnits > 0) {
            numberOfUnits--;
        }
        return numberOfUnits;
    }
        else if(action === "plus") {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });


    updateCart();
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// clear cart contents

let clearCart = document.getElementById('clearCartButton');

clearCart.onclick = function clearCart() {
    cart.length = 0;
    
    updateCart();
}

let checkoutButton = document.getElementById('checkoutButton');

checkoutButton.onclick = function clearCart() {
    cart.length = 0;
    alert('Thank you for your purchase!');

    updateCart();
}

// Sign Up Form
