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

// Depending on player choice it will return thier choice.
const playerPlay = () => {
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
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

const rockPlay = () => {
  const rockButton = document.querySelector("#rock");

  rockButton.addEventListener("click", playerPlay);
};

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 1; i <= 5; i++) {
//     let playerSelection = playerPlay();
//     let ComputerSelection = computerPlay();
//     let roundResult = playRound(playerSelection, ComputerSelection);
//     if (roundResult.includes(`win`)) {
//       console.log(roundResult);
//       playerScore += 1;
//     } else if (roundResult.includes(`lose`)) {
//       console.log(roundResult);
//       computerScore += 1;
//     } else {
//       console.log(roundResult);
//       continue;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(`You Have won the game YAY!`);
//   } else if (computerScore > playerScore) {
//     console.log(`You have lost the game BOO!`);
//   } else {
//     console.log(`Game has resulted in a tie AWW!`);
//   }
// };

// game();
