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

// Uncomment below to make game play.
// const playerSelection = prompt("Rock, paper, scissors?").toLocaleLowerCase();

const playerSelection = "rock";
const computerSelection = getComputerChoice();

// Will play the game 5 times.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";

  // Will loop 5 rounds
  for (let i = 0; i < 5; i++) {
    result = playRound();
    if (result.includes("win")) {
      playerScore += 1;
    } else if (result.includes("lose")) {
      computerScore += 1;
    } else if (result.includes("tie")) {
      continue;
    }
  }
  // After all the rounds this will determine a winner.
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("You have won the game!");
  } else if (computerScore > playerScore) {
    console.log("You have lost the game!");
  } else {
    console.log("Game was a tie.");
  }
}

console.log(game());
