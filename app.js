// create global variables
let givenRandomNumber;
let userGuesses = [];
let attempts = 0; /* adding the number of attempts */
let maxGuesses;

// creating a game ending function
function gameEnded() {
	document.getElementById('newGameButton').style.display = 'inline';
	document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}
// this random number function will be called as soon as the screen loads
// it hides part of the screen
function init() {
	givenRandomNumber = Math.floor(Math.random() * 100 + 1);
	console.log(givenRandomNumber);
	document.getElementById('newGameButton').style.display = 'none';
	document.getElementById('gameArea').style.display = 'none';
}

// this function is linked to the easy and Hard buttons
// this function hides the welcomeScreen and revels the gameArea
function startGameView() {
	document.getElementById('welcomeScreen').style.display = 'none';
	document.getElementById('gameArea').style.display = 'block';
}

// easy button, calling the startGameView function, onclick
function easyMode() {
	maxGuesses = 10;
	startGameView();
}

function mediumMode() {
	maxGuesses = 6;
	startGameView();
}
// hard button, calling the startGameView function, onclick
function hardMode() {
	maxGuesses = 5;
	startGameView();
}

// create a function that compares the user input with the given random number generated at the start of the game
function compareGuess() {
	// transform the user input into a number
	const userGuess = Number(document.getElementById('inputBox').value);
	//pushes the user input value to the array userGuesses
	userGuesses.push(`  ${userGuess}`);
	//displays the userGuesses array in the span
	document.getElementById('guesses').innerHTML = userGuesses;
	/* adding the number of attempts */
	attempts++;
	document.getElementById('attempts').innerHTML = attempts;
	// created an if statement to evaluate if the user attempt is bigger than the max number of guesses
	if (attempts < maxGuesses) {
		if (userGuess > givenRandomNumber) {
			document.getElementById('textOutput').innerHTML = ` Your guess was too high!`;
			document.getElementById('inputBox').value = '';
		} else if (userGuess < givenRandomNumber) {
			document.getElementById('textOutput').innerHTML = `Your guess was too low!`;
			document.getElementById('inputBox').value = '';
		} else {
			document.getElementById(
				'textOutput'
			).innerHTML = `🎊 CONGRATULATIONS you guessed the right number In ${attempts} attempts!!! 🎊`;
			gameEnded();
		}
	} else {
		if (userGuess > givenRandomNumber) {
			document.getElementById('textOutput').innerHTML = `You you've lost! 
            The number was: ${givenRandomNumber}`;
			gameEnded();
		} else if (userGuess < givenRandomNumber) {
			document.getElementById('textOutput').innerHTML = `You you've lost! 
            The number was: ${givenRandomNumber}`;
			gameEnded();
		} else {
			document.getElementById('textOutput').innerHTML = `
            🎊 CONGRATULATIONS you guessed the right number In ${attempts} attempts!!! 🎊`;
			gameEnded();
		}
	}
}
