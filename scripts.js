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

// Plays one round of the game and returns a string
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `Game has resulted in a TIE.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

// 5 rounds and
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`Round #${i}`);
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = computerPlay();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    let results = playRound(playerSelection, computerSelection);
    if (results.includes("win")) {
      playerScore += 1;
    } else if (results.includes("lose")) {
      computerScore += 1;
    } else if (results.includes("TIE")) {
      console.log(`-------------------`);
      continue;
    }

    console.log(`-------------------`);
  }
  if (playerScore > computerScore) {
    console.log(`You win! the Game!`);
  } else if (playerScore < computerScore) {
    console.log(`You lose.`);
  } else if (playerScore === computerScore) {
    console.log(`Game was a draw.`);
  }
};

game();
