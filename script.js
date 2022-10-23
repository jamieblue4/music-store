// Variables
const name = document.querySelector('.name');
const resetButton = document.querySelector('#reset');
const logoutButton = document.querySelector('#logout');
const form = document.querySelector('form');
const userName = document.querySelector('#username');
const submitButton = document.querySelector('#name-submit');


//Functions
submitButton.addEventListener('click', function() {
    localStorage.setItem('name', userName.value);

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
        let name = localStorage.getItem('name').value;
        console.log(name);
    }
}
