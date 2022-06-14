/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Author @ Barbara Vega*/


let showLetter = null;

//The 'Phrase Class' receives a phrase parameter and initializes the phrase converted to all lower case.
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. 
    addPhraseToDisplay() {
        let phraseDisplay = document.querySelector('#phrase ul');
        let hTMLPhraseToDisplay = " ";

        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                hTMLPhraseToDisplay += '<li class="space"> </li>';
            }
            else {
                hTMLPhraseToDisplay += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
        phraseDisplay.innerHTML = hTMLPhraseToDisplay;
    };


    // checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };


    // showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. When the player correctly guesses a letter, the empty box is replaced with the matched letter .
    showMatchedLetter(letter) {
        let letterMatch = document.querySelectorAll('#phrase ul li');

        for (let i = 0; i < letterMatch.length; i++) {
            if (letter === letterMatch[i].innerText) {
                letterMatch[i].className = `show letter ${letterMatch[i]}`;
            }
        }
    };


}









