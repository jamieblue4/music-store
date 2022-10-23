// Variables
const name = document.querySelector('.name');
const resetButton = document.querySelector('#reset');
const logoutButton = document.querySelector('#logout');
const form = document.querySelector('form');
const userName = document.querySelector('#username');
const submitButton = document.querySelector('#name-submit');


//Functions
submitButton.addEventListener('click', function(e) {
    preventDefault(e);
});

submitButton.addEventListener('click', function() {
    localStorage.setItem('name', userName.value);
});

submitButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter');
    localStorage.setItem('name', userName.value);
}
);

logoutButton.addEventListener('click', function() {
    localStorage.removeItem(userName);
    
});
