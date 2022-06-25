// understanding the problem//
// I am creating a game where I am playing against the computer and we each choose either rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock. If both players choose the same, it results in a tie //

// planning //
// computer and user both input a choice from [rock, paper, scissors] //
// compare user choice and computer choice //
// if computer and user both have the same choice = tie //
// else depending on what computer chooses and user chooses, one will win //
// declare a either a tie or a winner //

// computerPlay //

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const computerSelection = computerPlay();
const playerSelection = prompt ("Choose rock, paper or scissors","");

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
    } else {
        console.log("You both picked the same! Tie Game");
    }
}

playRound(playerSelection,computerSelection);