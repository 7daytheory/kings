//globals
const button = document.querySelector('#randomize');
const card = document.querySelector('#card');
const instructions = document.querySelector('#instructions');
const numberCards = document.querySelector('.numberCards');
const viewCards = document.querySelector('.viewCards');
const cardsWrap = document.querySelector('#viewCardsWrap');

let instructionArray = [
  'Two is You!',
  'Two is You!',
  'Two is You!',
  'Two is You!',
  'Three is Me!',
  'Three is Me!',
  'Three is Me!',
  'Three is Me!',
  'Touch the Floor!',
  'Touch the Floor!',
  'Touch the Floor!',
  'Touch the Floor!',
  'Five is Guys!',
  'Five is Guys!',
  'Five is Guys!',
  'Five is Guys!',
  'Six is Chicks!',
  'Six is Chicks!',
  'Six is Chicks!',
  'Six is Chicks!',
  'Seven Point To Heaven!',
  'Seven Point To Heaven!',
  'Seven Point To Heaven!',
  'Seven Point To Heaven!',
  'Pick a Drinking Mate!',
  'Pick a Drinking Mate!',
  'Pick a Drinking Mate!',
  'Pick a Drinking Mate!',
  'Pick a Rhyme!',
  'Pick a Rhyme!',
  'Pick a Rhyme!',
  'Pick a Rhyme!',
  'Thumb Master!',
  'Thumb Master!',
  'Thumb Master!',
  'Thumb Master!',
  'Pick a Category!',
  'Pick a Category!',
  'Pick a Category!',
  'Pick a Category!',
  'Question Master!',
  'Question Master!',
  'Question Master!',
  'Question Master!',
  'Rule Changer!',
  'Rule Changer!',
  'Rule Changer!',
  'Rule Changer!',
  'Waterfall!',
  'Waterfall!',
  'Waterfall!',
  'Waterfall!',
];

let cardArray = [
  '2C',
  '2D',
  '2S',
  '2H',
  '3C',
  '3D',
  '3S',
  '3H',
  '4C',
  '4D',
  '4S',
  '4H',
  '5C',
  '5D',
  '5S',
  '5H',
  '6C',
  '6D',
  '6S',
  '6H',
  '7C',
  '7D',
  '7S',
  '7H',
  '8C',
  '8D',
  '8S',
  '8H',
  '9C',
  '9D',
  '9S',
  '9H',
  '10C',
  '10D',
  '10S',
  '10H',
  'JC',
  'JD',
  'JS',
  'JH',
  'QC',
  'QD',
  'QS',
  'QH',
  'KC',
  'KD',
  'KS',
  'KH',
  'AC',
  'AD',
  'AS',
  'AH',
];

let cards = [cardArray, instructionArray];

/*
let cardArray = [
  {"2C","Two is You!"},
  {"2D","Two is You!"},
  {"2S","Two is You!"},
  {"2H", "Two is You!"},
  {"3C", "Three is Me!"},
  {"3D", "Three is Me!"},
  {"3S", "Three is Me!"},
  {"3H", "Three is Me!"},
  {"4C", "Touch the Floor!"},
  {"4D", "Touch the Floor!"},
  {"4S", "Touch the Floor!"},
  {"4H", "Touch the Floor!"},
  {"5C", "Five is Guys!"},
  {"5D", "Five is Guys!"},
  {"5S", "Five is Guys!"},
  {"5H", "Five is Guys!"},
  {"6C", "Six is Girls!"},
  {"6D", "Six is Girls!"},
  {"6S", "Six is Girls!"},
  {"6H", "Six is Girls!"},
  {"7C", 'Seven Point To Heaven!'},
  {"7D", 'Seven Point To Heaven!'},
  {"7S", 'Seven Point To Heaven!'},
  {"7H", 'Seven Point To Heaven!'},
  {"8C", 'Pick a Mate!'},
  {"8D", 'Pick a Mate!'},
  {"8S", 'Pick a Mate!'},
  {"8H", 'Pick a Mate!'},
  {"9C", 'Nine is Rhyme!'},
  {"9D", 'Nine is Rhyme!'},
  {"9S", 'Nine is Rhyme!'},
  {"9H", 'Nine is Rhyme!'},
  {"10C", "Thumb Master!"},
  {"10D", "Thumb Master!"},
  {"10S", "Thumb Master!"},
  {"10H", "Thumb Master!"},
  {"JC", "Pick a Category!"},
  {"JD", "Pick a Category!"},
  {"JS", "Pick a Category!"},
  {"JH", "Pick a Category!"},
  {"QC", "Question Master!"},
  {"QD", "Question Master!"},
  {"QS", "Question Master!"},
  {"QH", "Question Master!"},
  {"KC", "Rule Change!"},
  {"KD", "Rule Change!"},
  {"KS", "Rule Change!"},
  {"KH", "Rule Change!"},
  {"AC", "Waterfall!"},
  {"AD", "Waterfall!"},
  {"AS", "Waterfall!"},
  {"AH", "Waterfall!"},
];
*/


button.addEventListener('click', () => {
  //Get Random number inside array length
  let random_num = Math.ceil(Math.random() * cards[0].length - 1);
  
  //Get Image Src
  card.src = 'images/' + cards[0][random_num] + '.png';
  
  //Change card image src to randomly picked one
  viewCards.innerHTML += `<img src=images/${cards[0][random_num]}.png alt='card'>`;
  
  //Change Instructions
  instructions.innerHTML = cards[1][random_num];
  
  //Remove Used card from 'deck'
  cards[0] = cards[0].filter(e => e !== cards[0][random_num]);
  
  //Update Deck
  numberCards.innerHTML = 'Cards Remaining : ' + cards[0].length;
});
