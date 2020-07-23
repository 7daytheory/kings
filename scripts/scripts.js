const button = document.querySelector('#randomize');
let card = document.querySelector('#card');
let instructions = document.querySelector('#instructions');

let randomArray = [
  'Two is You!',
  'Two is You!',
  'Two is You!',
  'Two is You!',
  'Three is Me!',
  'Three is Me!',
  'Three is Me!',
  'Three is Me!',
  'Touch the Floor!!!!',
  'Touch the Floor!!!!',
  'Touch the Floor!!!!',
  'Touch the Floor!!!!',
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
  'Waterfall! DRINK!',
  'Waterfall! DRINK!',
  'Waterfall! DRINK!',
  'Waterfall! DRINK!',
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

let usedCards = [];

button.addEventListener('click', () => {
  let random = randomArray[Math.floor(Math.random() * randomArray.length - 1)];

  let number = Math.floor(Math.random() * randomArray.length);

  console.log(random);

  console.log(number);

  console.log(number);
  console.log('random month =>', randomArray.length);
  console.log('random month =>', cardArray.length);

  card.src = 'images/' + cardArray[number] + '.png';

  usedCards.push(cardArray[number]);

  console.log(usedCards);

  instructions.innerHTML = randomArray[number];
});
