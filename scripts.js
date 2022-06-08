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
  let result = ``;
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    result = `Game has resulted in a TIE.`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  return result;
};

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});

const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = document.querySelectorAll("button");
    let ComputerSelection = computerPlay();
    let roundResult = playRound(playerSelection, ComputerSelection);
    if (roundResult.includes(`win`)) {
      console.log(roundResult);
      playerScore += 1;
    } else if (roundResult.includes(`lose`)) {
      console.log(roundResult);
      computerScore += 1;
    } else {
      console.log(roundResult);
      continue;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You Have won the game YAY!`);
  } else if (computerScore > playerScore) {
    console.log(`You have lost the game BOO!`);
  } else {
    console.log(`Game has resulted in a tie AWW!`);
  }
};

game();
