function guessingGame() {
    let target = Math.floor(Math.random() * 100);
    let guesses = 0;
    let gameOver = false;
    return function game(num){
        guesses++;
        if(gameOver === true) return 'The game is over, you already won!';
        if(num === target) {
            gameOver = true;
            return `You win! You found ${num} in ${guesses} guesses.`;
        } else if(num < target) {
            return `${num} is too low!`;
        } else {
            return `${num} is too high!`
        }
    }
}

module.exports = { guessingGame };
