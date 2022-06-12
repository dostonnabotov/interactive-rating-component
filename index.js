const form = document.getElementById('form');
const inputs = form.querySelectorAll('input');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        if (input.checked) {
            document.getElementById('score').innerHTML = input.value;
        }
    });

    ratingCard.classList.add('hide');
    thankYouCard.classList.remove('hide');
});