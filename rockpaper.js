let hands = ["rock", "paper", "scissors"];
function getRandomHand() {
  let randomone = Math.random() * 3;
  randomone = Math.floor(randomone); // Ensure the hand is between 0 and 2
}
function rockpaper() {
  let playerInput = prompt(
    "Enter your choice in number (1.rock,2. paper, 3.scissors):"
  );
  let computer = hands[getRandomHand()];
  let player = hands[Number(playerInput)];
  if (computer === player) {
    console.log("It's a tie!");
  } else if (computer === "rock" && player === "scissors") {
    console.log("Computer wins!");
  } else if (computer === "paper" && player === "rock") {
    console.log("Computer wins!");
  } else if (computer === "scissors" && player === "paper") {
    console.log("Computer wins!");
  } else {
    console.log("Player wins!");
  }
}
rockpaper();
