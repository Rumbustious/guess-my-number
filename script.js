`use strict`;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check-button').addEventListener('click', function () {
    const guess = Number(document.querySelector('#guess-input').value);
    // Invalid number
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.secret-number').textContent = secretNumber;
        document.querySelector('.secret-number').style.width = '20rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (highscore > score){
            highscore = score;
            document.queryCommandValue('highscore').textContent = highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = '#ef3838';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = '#ef3838';
        }
    }
});
document.querySelector('.reset-button').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.secret-number').style.width = '8rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('#guess-input').value = '';
    document.querySelector('.secret-number').textContent = '?';
});
