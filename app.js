alert('Welcome to our game! Can you guess our secret number?');
let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let guess;
let counter = 1;

while (guess != secretNumber) {
    guess = prompt('Pick a number between 1 and 100.');

    if (guess == secretNumber) {
        break;
    } else {
        if (guess < secretNumber) {
            alert(`Our secret number is bigger than ${guess}.`);
        } else {
            alert(`Our secret number is smaller than ${guess}.`);
        }
        counter++;
    }
}
let attemptWord = counter > 1 ? 'attempts' : 'attempt';

alert(`You found out our secret number, which is ${secretNumber}, in ${counter} ${attemptWord}!`);
