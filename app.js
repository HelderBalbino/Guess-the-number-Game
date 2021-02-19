let computerGuess;

function init() {
	computerGuess = Math.floor(Math.random() * 100 + 1);
	document.getElementById('newGameButton').style.display = 'none';
	document.getElementById('gameArea').style.display = 'none';
}

function startGameView() {
	document.getElementById('welcomeScreen').style.display = 'none';
	document.getElementById('gameArea').style.display = 'block';
}

function easyMode() {
	startGameView();
}

function hardMode() {
	startGameView();
}

// const id = setInterval(() => {
// 	console.log(Math.random());
// }, 2000);

// const printRandom = setInterval(() => {
// 	startGameView();
// }, 2000);
