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

const rockPlay = () => {
  let computerSelection = computerPlay();
  let playerSelection = "rock";
  playRound("rock", computerSelection);
  container.textContent = `${playRound(playerSelection, computerSelection)}`;
  game("rock", computerSelection);
};

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", rockPlay);

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

// 5 rounds and
const game = (playerSelection, computerSelection) => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let p = document.createElement("p");
    p.innerText = `Round #${i}; `;
    container.appendChild(p);

    let results = playRound(playerSelection, computerSelection);
    if (results.includes("win")) {
      playerScore += 1;
    } else if (results.includes("lose")) {
      computerScore += 1;
    } else if (results.includes("TIE")) {
      continue;
    }
  }
  if (playerScore > computerScore) {
    const player = document.createElement("p");
    player.innerText = `You win! the Game!`;
    playerScore.appendChild(player);
  } else if (playerScore < computerScore) {
    const playerScore = document.querySelector(".playerSCore");
    console.log(`You lost the game.`);
  } else if (playerScore === computerScore) {
    console.log(`Game was a draw.`);
  }
};
