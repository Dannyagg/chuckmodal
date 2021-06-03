'use strict';

function toggleModal() {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}

const closeModalButton = document.querySelector('#closeModal');


closeModalButton.addEventListener ('click', function () {
    toggleModal ();
});

function buildQuote(theQuote) {

    const modalElement = document.querySelector('#modal p');
    modalElement.innerText = theQuote;
    toggleModal();
}

document.addEventListener('DOMContentLoaded', function () {
    fetch ('https://api.chucknorris.io/jokes/random?category=dev')
    .then(function(response) {
        return response.json();
    })
    .then(function (data){
        buildQuote(data.value);

    })
    .catch(function(error) {
        console.error('ERROR:', error);
        return error;
    });

    document.addEventListener('keydown', function(event) {
        console.log ('the key that was passed is: ', event.key);
        if(event.key === 'Escape') {
            toggleModal();
        }
    })
});

