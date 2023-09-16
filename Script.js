// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('result').innerHTML = 'Please enter a valid number between 1 and 100.';
    } else if (guess === randomNumber) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        document.getElementById('result').innerHTML = 'Try a higher number.';
    } else {
        document.getElementById('result').innerHTML = 'Try a lower number.';
    }
}
