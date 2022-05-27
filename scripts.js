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
  if (playerSelection === "rock" && computerSelection === "scissors") {
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

const container = document.querySelector(".container");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  let computerSelection = computerPlay();
  game("rock", computerSelection);
});

const paperPlay = () => {
  let computerSelection = computerPlay();
  playRound("paper", computerSelection);
  container.textContent = `${playRound("paper", computerSelection)}`;
};

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", paperPlay);

const scissorsPlay = () => {
  let computerSelection = computerPlay();
  playRound("scissors", computerSelection);
  container.textContent = `${playRound("scissors", computerSelection)}`;
};

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", scissorsPlay);

const game = (playerSelection, computerSelection) => {
  let playerScore = 0;
  let computerScore = 0;

  // 5 rounds to start
  for (let i = 1; i <= 5; i++) {
    let results = playRound(playerSelection, computerSelection);
    if (results.includes("win")) {
      playerScore += 1;
      const playerSCore = document.querySelector(".playerScore");
    } else if (results.includes("lose")) {
      computerScore += 1;
    } else if (results.includes("TIE")) {
      continue;
    }
  }
  console.log(computerScore, playerScore);
  if (playerScore > computerScore) {
    console.log(`You win! the Game!`);
  } else if (playerScore < computerScore) {
    console.log(`You lost the game.`);
  } else if (playerScore === computerScore) {
    console.log(`Game was a draw.`);
  }
};
