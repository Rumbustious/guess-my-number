`use strict`;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check-button').addEventListener('click', function () {
    const guess = Number(document.querySelector('#guess-input').value);
    document.querySelector('.score').textContent = score;
    // Invalid number
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber){
        if (score > 0){
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.secret-number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        score = 0;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    } else if (guess > secretNumber){
        if (score > 0){
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    } else if (guess < secretNumber){
        if (score > 0){
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    } 
});
