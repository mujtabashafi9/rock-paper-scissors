function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!"
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win the round!"
    }
    else {
        return "You lose the round!"
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function () {
        let playerSelection = "rock";
        console.log("Player chose", playerSelection)
    })

    paper.addEventListener("click", function () {
        let playerSelection = "paper";
        console.log("Player chose", playerSelection)
    })

    scissors.addEventListener("click", function () {
        let playerSelection = "scissors";
        console.log("Player chose", playerSelection)
    })

    rock.addEventListener("click", () => playGame("rock"))
    paper.addEventListener("click", () => playGame("paper"))
    scissors.addEventListener("click", () => playGame("scissors"))
})

function playGame(playerSelection) {
    let playerscore = 0;
    let computerscore = 0;

    choices = ['rock', 'paper', 'scissors'];
    const computerSelection = getComputerChoice(choices)
    const roundResult = playRound(playerSelection, computerSelection)
    console.log(roundResult)
    if (roundResult == 'You win the round!') {
        playerscore++
    }
    else if (roundResult == "You lose the round!") {
        computerscore++
    }
    if (playerscore == computerscore) {
        console.log("Game tied!")
    }
    else if (playerscore > computerscore) {
        console.log("You win the game!")
    }
    else {
        console.log("You lose the game!")
    }
    return playerscore;
}
