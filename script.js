// understanding the problem//
// I am creating a game where I am playing against the computer and we each choose either rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock. If both players choose the same, it results in a tie //

// planning //
// computer and user both input a choice from [rock, paper, scissors] //
// compare user choice and computer choice //
// if computer and user both have the same choice = tie //
// else depending on what computer chooses and user chooses, one will win //
// declare a either a tie or a winner //

// computerPlay //

const choices = ["rock", "paper", "scissors"];

function randomPlay() {
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

const computerChoice = randomPlay();
const playerChoice = randomPlay();

for (count = 0; count < 5; count++) {
  const computerChoice = randomPlay();
  const playerChoice = randomPlay();

function playRound(computerChoice,playerChoice) {
  let playerWin = "Player Won!";
  let computerWin = "Computer Won!";

  if (computerChoice == playerChoice) {
    return "Tie game!";
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    return playerWin;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    return playerWin;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    return playerWin;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    return computerWin;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    return computerWin;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    return computerWin;
  }
}
  let oneRound = playRound(computerChoice,playerChoice);
  console.log(oneRound);
}
