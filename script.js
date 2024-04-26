

// playGame()

document.addEventListener("DOMContentLoaded", () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    let playerscore = 0;
    let computerscore = 0;
    let playerSelection = "";
    let maxRounds = 5;
    let roundsPlayed = 0;

    const computerSelection = getComputerChoice();

    function getComputerChoice() {
        choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
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

    function determineWinner() {
        if (playerscore == computerscore) {
            console.log("Game tied!")
        }
        else if (playerscore > computerscore) {
            console.log("You win the game!")
        }
        else {
            console.log("You lose the game!")
        }
        return playerscore, computerscore;
    }

    function playGame() {
        const player = document.querySelector("#player");
        const computer = document.querySelector("#computer");
        if (roundsPlayed >= maxRounds) {
            determineWinner();
            console.log("Game finished!")
            return;
        }
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult)
        if (roundResult == 'You win the round!') {
            playerscore++
            player.textContent = `Player score: ${playerscore}`;
        }
        else if (roundResult == "You lose the round!") {
            computerscore++
            computer.textContent = `Computer score: ${computerscore}`;
        }
        roundsPlayed++;
    }

    rock.addEventListener("click", () => {
        playerSelection = "rock";
        playGame("rock");
    })

    paper.addEventListener("click", () => {
        playerSelection = "paper";
        playGame("paper");
    })

    scissors.addEventListener("click", () => {
        playerSelection = "scissors";
        playGame("scissors");
    })
})


