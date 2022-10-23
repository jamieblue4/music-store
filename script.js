const resetButton = document.querySelector('#reset');
const form = document.querySelector('form');
const submitButton = document.querySelector('#signup');
const logoutButton = document.querySelector('#logout-button');

//Functions
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

submitButton.addEventListener('click', function() {
    let name = document.querySelector('#username').value;
    name = localStorage.setItem('name', name);
});

submitButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter');
    let name = document.querySelector('#username').value;
    name = localStorage.setItem('name', name);
});

logoutButton.addEventListener('click', function() {
    let name = localStorage.getItem('name');
    localStorage.removeItem('name');
});