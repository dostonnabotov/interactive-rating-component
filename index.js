const form = document.getElementById('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        console.log(input.checked);
    })
})