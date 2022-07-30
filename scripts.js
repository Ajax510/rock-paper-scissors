// Will randomly return a string rock, paper, scissors
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3) + 1;
  if (computer === 1) {
    return "rock";
  } else if (computer === 2) {
    return "paper";
  } else if (computer === 3) {
    return "scissors";
  }
}

// Will play a single round of RPS and return a string sentence
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Game resulted in a tie.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Will return player selection as a string.
function getPlayerChoice() {
  // let player = prompt("Rock, paper, or scissors?").toLocaleLowerCase();
  let player = "paper";
  return player;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

// Will play the game 5 times.
function game() {
  // let playerScore = 0;
  // let computerScore = 0;
  for (let i = 0; i < 5; i++) {}
}

game();
