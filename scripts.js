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
  let player = prompt("Rock, paper, or scissors?").toLocaleLowerCase();
  return player;
}

// Will play the game 5 times.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result.includes("win") === true) {
      playerScore += 1;
      console.log(result);
      console.log(`playerScore: ${playerScore}`);
      console.log(`computerScore: ${computerScore}`);
      console.log("-----------------------");
    } else if (result.includes("lose") === true) {
      computerScore += 1;
      console.log(result);
      console.log(`playerScore: ${playerScore}`);
      console.log(`computerScore: ${computerScore}`);
      console.log("-----------------------");
    } else if (result.includes("tie") === true) {
      console.log("Round was a draw.");
      console.log(`playerScore: ${playerScore}`);
      console.log(`computerScore: ${computerScore}`);
      console.log("-----------------------");
    }
  }
  console.log("-----------------------");
  console.log("Game final score:");
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

game();
