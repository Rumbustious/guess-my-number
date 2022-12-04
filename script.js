`use strict`;
let secretNumber;
let score = 20;
let highscore = 0;

const randomNumber = function () {
   secretNumber = Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const showSecretNumber = function (number){
    document.querySelector('.secret-number').textContent = number;
};


// random the number between 1 to 20
randomNumber();
// game guessing [Check button click]
document.querySelector('.check-button').addEventListener('click', function () {
    const guess = Number(document.querySelector('#guess-input').value);
    // case of invalid number
    if (!guess) {
        displayMessage('⛔ No Number!');
        // case of correct number
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        showSecretNumber(secretNumber);
        document.querySelector('.secret-number').style.width = '20rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (highscore > score){
            highscore = score;
            document.queryCommandValue('highscore').textContent = highscore;
        }
        // Case of the wrong answer
    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('body').style.backgroundColor = '#ef3838';
            displayScore(0);
        }
    }
    
    
});

//reseting game [Again button click]
document.querySelector('.reset-button').addEventListener('click', function () {
    score = 20;
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.secret-number').style.width = '8rem';
    document.querySelector('#guess-input').value = '';
    displayMessage('Start guessing...');
    showSecretNumber('?');
    randomNumber();
});
