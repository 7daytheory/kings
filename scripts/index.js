const newBtn = document.querySelector("#newGame");
const resumeBtn = document.querySelector("#resumeGame");
const settingsBtn = document.querySelector("#settingsGame");
const rateBtn = document.querySelector("#rateGame");

newBtn.addEventListener("click", newGame);
resumeBtn.addEventListener("click", resumeGame);
settingsBtn.addEventListener("click", settingsGame);
rateBtn.addEventListener("click", rateGame);

function newGame() {
	location.replace("game.html?game=new");
}

function resumeGame() {
	location.replace("game.html?game=resume");
}

function settingsGame() {
	location.replace("settings.html");
}

function rateGame() {
	prompt("Rate us 5 stars!");
}