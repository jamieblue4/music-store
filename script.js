// Signup Variables
const resetButton = document.querySelector('#reset');
const submitButton = document.querySelector('#signup');
const logoutButton = document.querySelector('#logout-button');
const greeting = document.querySelector('#greeting');
let form = document.querySelector('form');

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

//Add to cart Functions
var shoppingCart = (function() {
    cart = [];

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        localStorage.setItme('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") !=null) {
        loadCart();
    }

    var obj = {};

    obj.addToCart = function(name, price, count) {
        for (var item in cart) {
            if(cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    obj.setCountForItem = function(name, count) {
        for(var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    obj.removeFromCart = function(name) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCarttoFixed(2));
    }

    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();

// Shopping Cart events
document.getElementById('.add-to-cart-button').click(function(e) {
    e.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addToCart(name, price, 1);
    displayCart();
});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i],price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item'" + cartArray[i].name + "</button>"
            + "<input type='number' class='item-count'" + cartArray[i].name + cartArray[i].count + "'>"
            + "<button class='delete-item'" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    document.getElementById('.cart-body').html(output);
    document.getElementById('.total-price').html(shoppingCart.totalCart());
    document.getElementById('.total-count').html(shoppingCart.totalCount());
}

    document.getElementById('.cart-body').on("click", ".minus-item", function(e) {
        var name = $(this).data('name')
        shoppingCart.removeFromCart(name);
        displayCart();
    })
    // +1
    document.getElementById('.cart-body').on("click", ".plus-item", function(e) {
        var name = $(this).data(name)
        shoppingCart.addItemToCart(name);
        displayCart();
    })
    // Item count input
    document.getElementById('.cart-content').on("change", ".item-count", function(e) {
        var name = $(this).data('name');
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
    });

    displayCart();