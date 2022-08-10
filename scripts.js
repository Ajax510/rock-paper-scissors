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

console.log(game());
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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const results = document.querySelector(".results");
const roundResult = document.querySelector(".round-result");
const player_Score = document.querySelector(".player-score");
const computer_Score = document.querySelector(".computer-score");
const final_score = document.querySelector(".final-score");

let playerSelection = "";
rock.addEventListener("click", () => {
  let playerSelection = "rock";
  game(playerSelection);
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  game(playerSelection);
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  game(playerSelection);
});

let playerScore = 0;
let computerScore = 0;

// Will play the game 5 times.
function game(playerSelection) {
  let result = "";

  let computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);

  if (result.includes("win")) {
    roundResult.textContent = result;
    playerScore += 1;
    player_Score.textContent = `player score: ${playerScore}`;
    computer_Score.textContent = `computer score: ${computerScore}`;
  } else if (result.includes("lose")) {
    roundResult.textContent = result;
    computerScore++;
    player_Score.textContent = `player score: ${playerScore}`;
    computer_Score.textContent = `computer score: ${computerScore}`;
  } else if (result.includes("tie")) {
    roundResult.textContent = result;
  }
  if (playerScore === 5 || computerScore === 5) {
    final_score.textContent = `Game final score: Your score: ${playerScore} ComputerScore: ${computerScore}`;
  } else if (playerScore === computerScore) {
    final_score.textContent = "Game resulted in a draw.";
  }
}

// think about what happens each time you click one of the buttons in terms of the scores
