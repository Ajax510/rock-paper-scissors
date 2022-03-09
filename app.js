// GAME begins

let playerSelection = prompt("What is your guess?").toLowerCase();
let computerSelection = computerPlay();

function computerPlay() {
  let computerGuess = Math.floor(Math.random() * 3) + 1;

  if (computerGuess === 1) {
    return "rock";
  } else if (computerGuess === 2) {
    return "paper";
  } else if (computerGuess === 3) {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection == "rock" && computerSelection === "scissors") {
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  return result;
}

function game() {
  let count = 0;
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 5; i++) {
    playRound();
    count++;
    console.log(count);
  }
}
