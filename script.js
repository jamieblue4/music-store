const resetButton = document.querySelector('#reset');
const form = document.querySelector('form');
const submitButton = document.querySelector('#signup');
const logoutButton = document.querySelector('#logout-button');
const greeting = document.querySelector('#greeting');

//Functions
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
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.querySelector('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.querySelector('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.querySelector('.button-buy-now')[0].addEventListener('click', purchaseClicked)
}

var carts_button = document.querySelector('.add-to-cart-button');
for (var i = 0; i < carts.length; i++) {
    var button = carts_button[i]
    button.addEventListener('click', addToCartClicked)
}

document.querySelector('.button-buy-now')[0].addEventListener('click', purchaseClicked)

function purchaseClicked() {
    alert('Thanks for shopping with us!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-title">${title}</span>
        </div>
        <span class="cart-price">${price}</span>
        <div class="cart-quantity">
            <input class="cart-quantity" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}