let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Shovon",
  chips: 150,
};

let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
// let sumEl =
//   document.querySelector(
//     "#sum-el"
//   ); /* Query selector is more specific for id */

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function startGame() {
  let isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "You've got the blackjack";
    hasBlackJack = true;
    console.log(hasBlackJack);
  } else {
    message = "You're out of game";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let Card = getRandomCard();
    cards.push(Card);
    sum += Card;
    renderGame();
    console.log(message);
  }
}
