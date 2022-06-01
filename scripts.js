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

// This is for the continer class and will be used later.
const container = document.querySelector(".container");

// The function for when you click ROCK.
const rockPlay = () => {
  let computerSelection = computerPlay();
  let round = playRound("rock", computerSelection);
  results(round);
  game(round);
};

// Selecting the rockButton, then adding an eventListener
// then directing you to the rockPlay function.
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", rockPlay);

// The function for when you click PAPER.
const paperPlay = () => {
  let computerSelection = computerPlay();
  let round = playRound("paper", computerSelection);
  results(round);
  game(round);
};

// Selecting the paperButton, then adding an eventListener
// then directing you to the paperPlay function.
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", paperPlay);

// The function for when you click SCISSORS.
const scissorsPlay = () => {
  let computerSelection = computerPlay();
  let round = playRound("scissors", computerSelection);
  results(round);
  game(round);
};

// Selecting the scissorsButton, then adding an eventListener
// directing you to the scissorsPlay function.
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", scissorsPlay);

// This function will display the string passed to it from the specific eventListener
const results = (resultsToDisplay) => {
  const content = document.querySelector(".content");
  content.innerText = `${resultsToDisplay}`;
  container.appendChild(content);
};

// This function will play the game 5 rounds and declare a winner.
const game = (playerSelection, computerSelection) => {
  let playerScore = 0;
  let computerScore = 0;
  const displayPlayerScore = document.querySelector(".playerScore");
  const displayComputerScore = document.querySelector(".computerScore");
  const displayFinalScore = document.querySelector(".finalScore");

  for (let i = 1; i <= 5; i++) {
    let roundResults = playRound(playerSelection, computerSelection);
    if (roundResults.includes("win")) {
      playerScore[i] += 1;
      displayPlayerScore.innerText = `Player Score: ${playerScore}${[i]}`;
      container.appendChild(displayPlayerScore);
    } else if (roundResults.includes("lose")) {
      computerScore[i] += 1;
      displayComputerScore.innerText = `Computer Score: ${computerScore}${[i]}`;
    } else if (roundResults.includes("TIE")) {
      continue;
    }
  }
  console.log("Final Score", computerScore, playerScore);
  if (playerScore > computerScore) {
    displayFinalScore.innerText = `You win! the Game!`;
  } else if (playerScore < computerScore) {
    displayFinalScore.innerText = `You lost the game.`;
  } else if (playerScore === computerScore) {
    displayFinalScore.innerText = `Game was a draw.`;
  }
};
