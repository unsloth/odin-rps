function getComputerChoice() {
    let rand = Math.floor(Math.random() * 10);
    if (rand < 3) {
        return "rock";
    } else if (rand < 6) {
        return "paper";
    } else return "scissors";
}

function compareChoices(playerSelection, computerSelection) {

    //console.log(playerSelection);
    //console.log(computerSelection);

    switch(true) {
        case playerSelection === computerSelection: 
            return "Tied!";
            break;
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "Round Won!";
            break;
        default: 
            return "Round Lost!";
    }
}

const buttons = document.querySelectorAll('button');

function playGame(e) {
    let playerChoice = this.classList.value;
    let compChoice = getComputerChoice();
    console.log(`You chose ${playerChoice}`);
    console.log(`I picked ${compChoice}`);
    result = compareChoices(playerChoice, compChoice);
    console.log(result);
}

buttons.forEach(choice => choice.addEventListener('click', playGame));