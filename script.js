function getComputerChoice() {
    let rand = Math.floor(Math.random() * 10);
    if (rand < 3) {
        return "Rock";
    } else if (rand < 6) {
        return "Paper";
    } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();
    computerSelection = computerSelection.trim().toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

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

function game() {

    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play Rock Paper Scissors:", "rock");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "Round Won!") {
            score++;
        }
    }

    console.log(`${score}/5 rounds won`);
}

game();