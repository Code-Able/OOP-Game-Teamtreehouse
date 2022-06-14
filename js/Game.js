/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * Author @ Barbara Vega*/




class Game {
    constructor() {
        //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        //phrases: an array of five Phrase objects to use with the game. 
        this.phrases = [
            new Phrase("Beauty is in the eye of the beholder"),
            new Phrase("Spill the beans"),
            new Phrase("Break a leg"),
            new Phrase("As right as rain"),
            new Phrase("Once in a blue moon")
        ];
        //activePhrase: This is the Phrase object that’s currently in play. The initial value is null. 
        this.activePhrase = null;
    }


    // This method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        let randomPhraseNumber = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomPhraseNumber];
        return randomPhrase;
    }


    startGame() {

        //hides the start screen overlay
        const startScreenOverlay = document.getElementById("overlay");
        startScreenOverlay.style.display = 'none';

        //calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase
        this.activePhrase = this.getRandomPhrase();

        //adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property
        this.activePhrase.addPhraseToDisplay();

    }

    resetGame() {
        const listOfKeys = document.querySelector('#phrase ul');
        const allKeys = document.getElementsByClassName('key');
        const resetButton = document.getElementById('btn__reset');
        const lives = document.querySelector('#scoreboard ol').children;
        
        // Resets list item elements to enabled and to original class 
        listOfKeys.innerHTML = '';
        for (let i = 0; i < allKeys.length; i++) {
            allKeys[i].className = 'key';
            allKeys[i].disabled = false;
        }

        // Changes the button text from 'Start Game' to 'Play Again' after first game is finished
        resetButton.textContent = 'Play Again';
        for (let i = 0; i < lives.length; i++) {
            lives[i].querySelector('img').src = 'images/liveHeart.png';
        }
    }


    //This method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
    handleInteraction(button) {
        const letter = button.innerText;
        let phrase = this.activePhrase
        button.disable = true;

        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, 
        // and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            phrase.showMatchedLetter(letter);
            if (this.checkForWin() === true) {
                this.gameOver(true);
            };
        }

        //If the phrase does not include the guessed letter, the wrong CSS classis added  to the selected letter's keyboard button and the removeLife() method is called.   
        else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }


    removeLife() {
        let lives = document.querySelectorAll('#scoreboard ol li');

        // increments the missed property
        this.missed++;

        // replaces liveHeart.png with lostHeart.png to show that the player has lost a life. 
        for (let i = 0; i < lives.length; i++) {
            if (this.missed === i + 1) {
                lives[i].innerHTML = '<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30">';
            }
            //If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
            else if (this.missed === 5) {
                return this.gameOver(false);
            }
        }
    }


    // This method checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin() {
        let showLetters = 0;
        let showSpace = 0;
        let keys = document.querySelectorAll('#phrase ul li');

        for (let i = 0; i < keys.length; i++) {
            if (keys[i].classList.contains('show')) {
                showLetters++;
            } else if (keys[i].classList.contains('space')) {
                showSpace++;
            }
        }
        return (showLetters + showSpace === keys.length);
    }


    //gameOver(): This method updates the overlay h1 element depending on the outcome of the game.
    gameOver(gameWon) {
        // displays the original start screen overlay
        const startScreenOverlay = document.getElementById("overlay");
        let h1Text = document.getElementById('game-over-message');
        startScreenOverlay.style.display = 'flex';

        if (gameWon === true) {
            startScreenOverlay.style.display = "flex";
            startScreenOverlay.className = 'win';
            h1Text.innerText = 'You won the last game!';
        } else if (gameWon === false) {
            startScreenOverlay.style.display = "flex";
            startScreenOverlay.className = 'lose';
            h1Text.innerText = 'You Lost.  Please try again!';
        }
        this.resetGame();
    }

}










