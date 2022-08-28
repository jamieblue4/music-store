// Variables
var tabs = document.getElementsByClassName('tabs');

//Functions
function openShop() {
    var tabContent = document.getElementsByClassName('tab-content');
for (i = 0; i < tabContent.length; i++) {
    tabContent[i].getElementsByClassName.display = "none";
}
for (i = 0; i < tabs.length; i++) {
var tab = document.getElementsByClassName('tab');
    tab[i].className = tab[i].className.replace(" active", "");
}
}