function getRandomCard() {
  let randomCard = Math.random() * 13;
  randomCard = Math.floor(randomCard); // Ensure the card is between 1 and 13
  if (randomCard === 0) {
    return 8;
  } else if (randomCard === 1) {
    return 11; // Ace can be 11
  } else if (randomCard > 10) {
    return 10; // Face cards (Jack, Queen, King) are worth 10
  } else {
    return randomCard; // Number cards are worth their face value
  }
}
let firstcard = getRandomCard();
let secondcard = getRandomCard();
let cardArray = [firstcard, secondcard];
// Initialize the first two cards and their sum
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let displayNew = document.getElementById("display-new");
function startGame() {
  if (message === "Do you want to draw a new card?") {
    messageEl.textContent =
      "You already have a game in progress. Please finish it before starting a new one.";
    return;
  }
  renderGame();
}
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  for (let i = 0; i < cardArray.length; i++) {
    cardsEl.textContent += cardArray[i] + " ; "; // Display the cards drawn so far
  } // Display the cards drawn so far
  messageEl.textContent = message;
  console.log(message);
  displayNew.textContent = "NEW CARD";
}

function newCard() {
  if (isAlive === false || hasBlackjack === true) {
    // Reset the game if the player is not alive
    sum = 0;
    cardArray = [];
    hasBlackjack = false;
    isAlive = true;
    message = "";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    if (sum === 0) {
      messageEl.textContent = "Click on New Card to Draw";
      displayNew.textContent = "NEW CARD";
    }
  } else {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cardArray.push(card);
    // Remove the first card from the array
    for (let i = 0; i < cardArray.length; i++) {
      console.log(cardArray[i]);
    }
    cardsEl.textContent = "Cards: ";
    renderGame();
    if (
      message === "You're out of the game!" ||
      message === "Wohoo! You've got Blackjack!"
    ) {
      displayNew.textContent = "NEW GAME " + "?";
    }
  }
  // Reset the cards display
  // Update the sum and message after drawing a new card//
}

//different js for practice //
