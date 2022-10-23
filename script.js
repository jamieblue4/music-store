
const nameContainer = document.querySelector('.name');
const resetButton = document.querySelector('#reset');
const logoutButton = document.querySelector('#logout');
const form = document.querySelector('form');
const submitButton = document.querySelector('#name-submit');

//Functions
submitButton.addEventListener('click', function() {
    preventDefault();
});

submitButton.addEventListener('keypress', function(e) {
    if(e.key === 'Enter');
    preventDefault();
});

submitButton.addEventListener('keypress', function(e) {
    if (e.key === 'Enter');
    let name = document.querySelector('#user-name');
    localStorage.setItem('name', name.value);
}
);

submitButton.addEventListener('click', function() {
    let name = document.querySelector('#user-name');
    localStorage.setItem('name', name.value);
});

logoutButton.addEventListener('click', function() {
    let name = document.querySelector('#user-name');
    localStorage.removeItem(name);
});
