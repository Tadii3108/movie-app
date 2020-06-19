
// Selecting elements from the DOM
const buttonElement = document.querySelector('search');
const inputElement = document.querySelector('input-value');

buttonElement.onclick = function(event) {
    event.preventDefault();
    console.log('Hello World, this button has been clicked!');
}