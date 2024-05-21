'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(btnShowModal)
const closeModal = function(e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
    console.log(btnShowModal[i].textContent);
    btnShowModal[i].addEventListener('click', function(e) {
        openModal(e);
    })
}



// close button to hidden modal
btnCloseModal.addEventListener('click', function(e) {
    closeModal(e);
})

// click overlay area to hidden modal
overlay.addEventListener('click', function(e) {
    closeModal(e);
})