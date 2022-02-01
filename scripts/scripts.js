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

let cards = [
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

let cardArray = [cards, instructionArray];

button.addEventListener('click', () => {
  //Get Random number inside array length
  let random_num = Math.ceil(Math.random() * cardArray[0].length - 1);
  
  //Get Image Src
  card.src = 'images/' + cardArray[0][random_num] + '.png';
  
  //Change card image src to randomly picked one
  viewCards.innerHTML += `<img src=images/${cardArray[0][random_num]}.png alt='card'>`;
  
  //Change Instructions
  instructions.innerHTML = cardArray[1][random_num];
  
  //Remove Used card from 'deck'
  cardArray[0] = cardArray[0].filter(e => e !== cardArray[0][random_num]);
  
  //Update Deck
  numberCards.innerHTML = 'Cards Remaining : ' + cardArray[0].length;
});
