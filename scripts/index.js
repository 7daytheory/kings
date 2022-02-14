const newBtn = document.querySelector("#newGame");
const resumeBtn = document.querySelector("#resumeGame");
const settingsBtn = document.querySelector("#settingsGame");
const rateBtn = document.querySelector("#rateGame");

newBtn.addEventListener("click", newGame);
resumeBtn.addEventListener("click", resumeGame);
settingsBtn.addEventListener("click", settingsGame);
rateBtn.addEventListener("click", rateGame);

const arrayOriginal = [
  {card:"2C", instruction:"Two is You!"},
  {card:"2D", instruction:"Two is You!"},
  {card:"2S", instruction:"Two is You!"},
  {card:"2H", instruction:"Two is You!"},
  {card:"3C", instruction: "Three is Me!"},
  {card:"3D", instruction: "Three is Me!"},
  {card:"3S", instruction: "Three is Me!"},
  {card:"3H", instruction: "Three is Me!"},
  {card:"4C", instruction: "Touch the Floor!"},
  {card:"4D", instruction: "Touch the Floor!"},
  {card:"4S", instruction: "Touch the Floor!"},
  {card:"4H", instruction: "Touch the Floor!"},
  {card:"5C", instruction: "Five is Guys!"},
  {card:"5D", instruction: "Five is Guys!"},
  {card:"5S", instruction: "Five is Guys!"},
  {card:"5H", instruction: "Five is Guys!"},
  {card:"6C", instruction: "Six is Girls!"},
  {card:"6D", instruction: "Six is Girls!"},
  {card:"6S", instruction: "Six is Girls!"},
  {card:"6H", instruction: "Six is Girls!"},
  {card:"7C", instruction: 'Seven Point To Heaven!'},
  {card:"7D", instruction: 'Seven Point To Heaven!'},
  {card:"7S", instruction: 'Seven Point To Heaven!'},
  {card:"7H", instruction: 'Seven Point To Heaven!'},
  {card:"8C", instruction: 'Pick a Mate!'},
  {card:"8D", instruction: 'Pick a Mate!'},
  {card:"8S", instruction: 'Pick a Mate!'},
  {card:"8H", instruction: 'Pick a Mate!'},
  {card:"9C", instruction: 'Nine is Rhyme!'},
  {card:"9D", instruction: 'Nine is Rhyme!'},
  {card:"9S", instruction: 'Nine is Rhyme!'},
  {card:"9H", instruction: 'Nine is Rhyme!'},
  {card:"10C", instruction: "Thumb Master!"},
  {card:"10D", instruction: "Thumb Master!"},
  {card:"10S", instruction: "Thumb Master!"},
  {card:"10H", instruction: "Thumb Master!"},
  {card:"JC", instruction: "Pick a Category!"},
  {card:"JD", instruction: "Pick a Category!"},
  {card:"JS", instruction: "Pick a Category!"},
  {card:"JH", instruction: "Pick a Category!"},
  {card:"QC", instruction: "Question Master!"},
  {card:"QD", instruction: "Question Master!"},
  {card:"QS", instruction: "Question Master!"},
  {card:"QH", instruction: "Question Master!"},
  {card:"KC", instruction: "Rule Change!"},
  {card:"KD", instruction: "Rule Change!"},
  {card:"KS", instruction: "Rule Change!"},
  {card:"KH", instruction: "Rule Change!"},
  {card:"AC", instruction: "Waterfall!"},
  {card:"AD", instruction: "Waterfall!"},
  {card:"AS", instruction: "Waterfall!"},
  {card:"AH", instruction: "Waterfall!"},
];

localStorage.setItem("cardSettings", JSON.stringify(arrayOriginal));

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