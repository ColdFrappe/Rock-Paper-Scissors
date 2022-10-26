function getComputerChoice() {
    const choicesArray = ["rock", "paper", "scissors"];
    let choiceComputer = choicesArray[Math.floor(Math.random() * 3)];
    return choiceComputer;
}

const computerSelection = getComputerChoice()

let playerSelection

function playRound(playerSelection = prompt('Rock, paper, scissors?').toLowerCase(), computerSelection = getComputerChoice()) {
    if (playerSelection === computerSelection) {
        return 'Draw'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore + 1
        return 'Rock beats scissors, player wins.'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore = computerScore + 1
        return 'Paper beats rock, computer wins.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore = computerScore + 1
        return 'Rock beats scissors, computer wins.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore + 1
        return 'Scissors beats paper, player wins.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore = playerScore + 1
        return 'Paper beats rock, player wins.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore = computerScore + 1
        return 'Scissors beats paper, computer wins.'
    }
    else {
        return 'Error: Please type your choice correctly.'
    }
}

let computerScore = 0

let playerScore = 0

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
        console.log('Computer Score: ' + computerScore)
        console.log('Player Score: ' + playerScore)
        console.log(i)
    }
}