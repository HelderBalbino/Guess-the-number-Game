// create global variables
let givenRandomNumber;
let userGuesses = [];

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
	startGameView();
}
// hard button, calling the startGameView function, onclick
function hardMode() {
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

	if (userGuess > givenRandomNumber) {
		document.getElementById('textOutput').innerHTML = 'Your guess was too high!';
		document.getElementById('inputBox').value = '';
	} else if (userGuess < givenRandomNumber) {
		document.getElementById('textOutput').innerHTML = 'Your guess was too low!';
		document.getElementById('inputBox').value = '';
	} else {
		document.getElementById('textOutput').innerHTML = ' 🎊 CONGRATULATIONS you guessed the right number!!! 🎊';
	}
}
