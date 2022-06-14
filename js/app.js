/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Author @ barbara Vega */


let game = '';
let startButton = document.getElementById('btn__reset');
let fullKeyboard = document.getElementById('qwerty');
let keyboardKey = document.querySelectorAll('.key');
let keyboardKeyReset = document.querySelectorAll('#qwerty .keyrow button');

let liElements = document.querySelectorAll('#phrase ul li');


// Adds a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
startButton.addEventListener('click', () => {
    game = new Game;
    game.startGame();
    keyboardKeyReset.className = 'key';
});


// Adds click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the 
// handleInteraction() method on the Game object. 
fullKeyboard.onclick = (e) => {
    let target = e.target;
    if (target.className === "key") {
        game.handleInteraction(target);
    };
};




