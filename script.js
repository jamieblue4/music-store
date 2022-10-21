// Variables
const name = document.querySelector('.name');
const resetButton = document.querySelector('#reset');
const logoutButton = document.querySelector('#logout');
const form = document.querySelector('form');
const getUserName = document.querySelector('#username');
const submitButton = document.querySelector('#name-submit');

//Functions

form.addEventListener('submit', function(e) { 
    e.preventDefault();
});

submitButton.addEventListener('click', function() {
    localStorage.setItem('name', getUserName.value);

    nameDisplayCheck();
});

submitButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter');
}
);

logoutButton.addEventListener('click', function() {
    localStorage.removeItem('name');
    
    nameDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        let personalGreeting = document.getElementById('.personal-greeting');
        personalGreeting.appendChild('p');
    } else {
  
    }
}
