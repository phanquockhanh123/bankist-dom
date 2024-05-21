'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', function() {
  openModal();
}));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('section');
console.log(allSections);
console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We used cookie for impoved analytics. <button class="btn btn--close-cookie">Got it</button>';
// add div top website
//header.prepend(message);
// add this div botton website
header.append(message);

// Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // message.remove();
  message.parentElement.removeChild(message);
});

// styles
message.style.backgroundColor = '#37383';
message.style.width = '120%';

console.log(getComputedStyle(message).color)
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
