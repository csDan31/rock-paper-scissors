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

function playerInput() {
    return prompt("Choose rock, paper, or scissors","")
}

let computerChoice = randomPlay();
// const playerChoice = randomPlay(); // to test two computers playing
let playerChoice;

game();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (count = 0; count < 5; count++) {
        const computerChoice = randomPlay();
        // const playerChoice = randomPlay(); //
        const playerChoice = playerInput();

        let playerWin = "Player Won!";
        let computerWin = "Computer Won!";

        function playRound(computerChoice, playerChoice) {
            if (computerChoice == playerChoice) {
                alert("Tie game!" + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "rock" && playerChoice == "paper") {
                playerScore++;
                alert(playerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "paper" && playerChoice == "scissors") {
                playerScore++;
                alert(playerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "scissors" && playerChoice == "rock") {
                playerScore++;
                alert(playerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "paper" && playerChoice == "rock") {
                computerScore++;
                alert(computerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "rock" && playerChoice == "scissors") {
                computerScore++;
                alert(computerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            } else if (computerChoice == "scissors" && playerChoice == "paper") {
                computerScore++;
                alert(computerWin + " Player: " + playerScore + " - Computer: " + computerScore);
            }
            }
            if (playerChoice == null || playerChoice == "") {
                alert("I guess you didn't want to play.");
                return "Game terminated";
                //break; // break is not needed?
        }
        let oneRound = playRound(computerChoice, playerChoice);
        // console.log(oneRound);
    }
    function results() {
        if (playerScore > computerScore) {
            return "You won! You beat the computer!";
        } else if (computerScore > playerScore) {
            return "Looks like you lost...better luck next time."
        } else if (playerChoice == computerChoice) {
            return "Looks like it's a tie! No winner!";
        }
    }
    alert(results());
    console.log("Final Score: Player: " + playerScore + " - Computer: " + computerScore);
}

