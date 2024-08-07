// Modal / cart logic
const modal = document.getElementById("cartModal");

var itemsInCart = document.getElementById("yourCartButton");
var shop = document.querySelector('.shop-container');
var cartItems = document.querySelector('.cart-container');
var total = document.querySelector('.cart-total');

window.onclick = function (event) {
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
        image: "beatles.jpg",
    },
    {
        id: 1,
        name: 'Currents',
        price: 24.99,
        image: "tame_impala.jpg",
    },
    {
        id: 2,
        name: 'Mr. Morale & the Big Steppers',
        price: 29.99,
        image: "kendrick_lamar.jpg",
    },
    {
        id: 3,
        name: 'Infinity On High',
        price: 19.99,
        image: "falloutboy.jpg",
    }
];

// empty cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id) {
    // see if item is already in cart
    if (cart.some((item) => item.id === id)) {
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


// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus") {
                numberOfUnits--;
            }
            // Prevent quantity from falling below zero.
            if (numberOfUnits <= 0) {
                numberOfUnits = 1;
            }
        } if (item.id === id)
            if (action === "plus") {
                numberOfUnits++;
            }
        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}

// render cart items
function renderCartItems() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-content" style="padding:1rem; display:inline;">
            <h4 class="cart-name" style="padding-top: 0.25em;">
                ${item.name}
            </h4>
        <div style="display: flex; justify-content: center;">
            <img class="cart-image" src="${item.image}" width="100" height="100" style="padding-right: 0.25em;">
            <div class="quantity" style="display: inline-block">
            <h4 class="cart-price" style="padding-bottom: 0.25em;">
            $
            ${item.price}
            </h4>
                <button type="button" class="btn btn-sm" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
                    ${item.numberOfUnits}
                <button type="button" class="btn btn-sm" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
                <button type="button" class="remove-button btn-md btn-danger" style="border-radius: 0.3em; display: grid; background: red; color: white;" onclick="removeItemFromCart(${item.id})">Remove</button>
            </div>
        </div>
            
            </div>
            `;
    }
    );

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
}