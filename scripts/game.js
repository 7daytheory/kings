//globals
const button = document.querySelector('#randomize');
const card = document.querySelector('#card');
const instructions = document.querySelector('#instructions');
const numberCards = document.querySelector('.numberCards');
const viewCards = document.querySelector('.viewCards');
const viewCardsWrap = document.querySelector('#viewCardsWrap');
const viewUsed = document.querySelector('#used');
const back = document.querySelector("#back");

//Get new or resume game
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');


let cardsArray;

if(localStorage.getItem("customSettings")) {
  cardsArray = JSON.parse(localStorage.getItem("customSettings"));
  localstorage.setItem("cards"), JSON.stringify(cardsArray);
} else {
  cardsArray = localStorage.getItem("cardSettings");
}

//Set localstorage
if(game === "new") {
cardsArray = JSON.parse(localStorage.getItem("cardSettings"));
localStorage.setItem("cards", JSON.stringify(cardsArray));
} else {
cardsArray = JSON.parse(localStorage.cards);
//Update Deck
numberCards.innerHTML = 'Cards Remaining : ' + cardsArray.length;
}

window.addEventListener("load", () => {
	var shuffle = new Audio("sounds/shuffleDeck.mp3");
  		let intervalID = setTimeout(() => {
		shuffle.play();
}, 100);
})

//OnClick Event
button.addEventListener('click', () => {
  
  if(cardsArray.length - 1 > 0) {
  //Get Random number inside array length
  let random_num = Math.ceil(Math.random() * cardsArray.length - 1);
  
  //Add Animation Style to Card
  card.classList.remove("card-transform");
	  
  card.classList.add("card-transform"); 
  
  //Get Image Src
  card.src = 'images/' + cardsArray[random_num].card + '.png';
  
  //Change card image src to randomly picked one
  viewCards.innerHTML += `<img src=images/${cardsArray[random_num].card}.png alt='card'>`;
  
  //Change Instructions
  instructions.innerHTML = cardsArray[random_num].instruction;
  
  //Remove element from Array 
  cardsArray.splice(random_num, 1);
  
  //Update Deck
  numberCards.innerHTML = 'Cards Remaining : ' + cardsArray.length;
  
  //Update localstorage
  localStorage.setItem("cards", JSON.stringify(cardsArray));
} else {
  
  //Change Instructions
  instructions.innerHTML = "No more Cards!";
  
  //Update Deck
  numberCards.innerHTML = 'Cards Remaining : 0';
}
});

//Toggle Used Cards
viewUsed.addEventListener('click', () => {
    if(viewCardsWrap.style.display === "none") {
        viewCardsWrap.style.display = "block";
        viewUsed.innerHTML = "Hide used cards";
    } else {
      viewCardsWrap.style.display = "none";
      viewUsed.innerHTML = "View used cards";
    }
})

back.addEventListener("click" , () => {
	location.replace("index.html");
})

button.addEventListener("click", () => {
	var cardflip = new Audio("sounds/flipCard.mp3");
	let intervalID = setTimeout(() => {
 // this code runs every second
		cardflip.play();
}, 100);
})


