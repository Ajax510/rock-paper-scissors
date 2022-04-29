// Game Begins

// Computer choice, returns rock, paper, or scissors.
const computerPlay = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
};

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(playerSelection);

let computerSelection = computerPlay();
console.log(computerSelection);

// Plays one round of the game.
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `Game has resulted in a TIE.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    if (playRound(playerSelection, computerSelection).includes("win")) {
      playerScore[i] += 1;
    } else if (playRound(playerSelection, computerSelection).includes("lose")) {
      computerScore += 1;
    } else {
      continue;
    }
  }
  console.log(
    `Final Score: Player: ${playerScore}, Computer: ${computerScore}.`
  );
  if (playerScore > computerScore) {
    console.log("Congrats! You have won!");
  } else if (computerScore > playerScore) {
    console.log("Sorry you have lost.");
  } else {
    console.log(`Game has resulted in a tie.`);
  }
};

game();

console.log(game(playRound(playerSelection, computerSelection)));
