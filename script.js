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

function endResult() {
    
}

function playGame() {
    let playerscore = 0;
    let computerscore = 0;
    for (let i = 1; i <= 5; i++) {

        choices = ['rock', 'paper', 'scissors'];
        const computerSelection = getComputerChoice(choices)
        const playerSelection = prompt("Choose from rock, paper or scissors").toLowerCase()
        const roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult)
        if (roundResult == 'You win the round!') {
            playerscore++
        }
        else if (roundResult == "You lose the round!") {
            computerscore++
        }
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
playGame()
