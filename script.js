// Modal / cart logic

var modal = document.getElementById('cartModal');

var cartBtn = document.getElementById('yourCartButton');
var span = document.getElementsByClassName('close')[0];

cartBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-content">
            <h4 class="cart-name" onclick="removeItemFromCart(${item.id})">
            ${item.name}
            </h4>
            <h4 class="cart-price" onclick="removeItemFromCart(${item.id})">
            ${item.price}
            </h4>
            <h4 class="cart-quantity">
            <div class="btn-minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            ${item.numberOfUnits}
            <div class="btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            </h4>
        </div>
            `;
    }
    );
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