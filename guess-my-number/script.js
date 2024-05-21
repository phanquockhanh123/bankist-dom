'use strict';

// get value msg
// random value guess
let randNumber = Math.floor(Math.random(1, 20) * 10);
console.log(randNumber)
// set value score
let score = 20;

// high score
let highScore = 0;

// custom display message
const displayMessage = function displayMessage(mes) {
    document.querySelector('.message').textContent = mes;
}

// Button "Enter" to get value
document.querySelector('.guess').addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.querySelector('.check').click();
    }
})

// add event click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage("Input valid!");
    } else if (randNumber === guess) {
        displayMessage("Correct answer!");
        document.querySelector('.number').textContent = randNumber;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        // high score
        if (score > highScore) {
            highScore = score;
            console.log(highScore)
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (randNumber !== guess) {
        if (score > 1) {
            displayMessage(guess > randNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("Lose game!");
            document.querySelector('.score').textContent = 0;
        }
    }
})

// button again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;    
    randNumber = Math.floor(Math.random(1, 20) * 10);

    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '';
    document.querySelector('body').style.backgroundColor = 'black';
    console.log(randNumber)
})

