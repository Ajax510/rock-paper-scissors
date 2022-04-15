// Game Begins

// this will assign the players choice when prompted, will also make it lower case
let playerSelection = prompt(
  'Please enter "Rock", "Paper", or "Scissors" to begin.'
).toLowerCase();

// this will be either rock, paper, or scissors
let computerSelection = computerPlay();

function computerPlay() {
  // function will randomly return rock, paper, or scissors
  // function will serve as computers choice
  // will generate a number between 1 - 3 and will correspond to R, P, S
  let computerGuess = Math.floor(Math.random() * 3) + 1;
  // if num 1, then return 'rock
  if (computerGuess === 1) {
    return "rock";
    // else if 2, return paper`
  } else if (computerGuess === 2) {
    return "paper";
    // else if 3, return scissors
  } else if (computerGuess === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // setup so it will play a single round of the game
  // and then will return a single string that declares the winner
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return `You picked ${playerSelection} the computer chose ${computerSelection} Game resulted in a TIE.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}. Better luck next time.`;
  }
}

const buttons = document.querySelector('#choices');
buttons.addEventListener
// this will show the results of the playRound function
console.log(playRound(playerSelection, computerSelection));

// this will call the function game() and display to console
// console.log(game());
