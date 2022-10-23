function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    let choiceComputer = choicesArray[Math.floor(Math.random() * 3)];
    return choiceComputer;
}
console.log(getComputerChoice());

function playGame(playerSelection, computerSelection) {
    if playerSelection === "Rock" && computerSelection === "Rock" {
        console.log("Draw!") /*continue from here make the game functions*/
    }
}

const computerSelection = getComputerChoice()
const playerSelection = prompt("Rock, paper, scissors?")