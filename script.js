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
// players choice //
/* function playerPlay(){
    let choice = prompt("Choose rock, paper or scissors","");
    return choice;
} */

const computerSelection = computerPlay();
const playerSelection = computerPlay();

function playRound(playerSelection,computerSelection) {

    let playerWin = "Player won!";
    let computerWin = "Computer won!";

    if (playerSelection == computerSelection) {
        return "Tie game!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        return playerWin;
    } else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors") {
        return computerWin;
    }
}

console.log(playRound(playerSelection,computerSelection));