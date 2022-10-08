function getComputerChoice() {
    let rand = Math.floor(Math.random() * 10);
    if (rand < 3) {
        return "rock";
    } else if (rand < 6) {
        return "paper";
    } else return "scissors";
}

function getPlayerChoice() {
    
    let noAnswer = true;
    let choice = "";
    while (noAnswer) {
        choice = prompt("Play Rock Paper Scissors:", "rock");
        choice = choice.trim().toLowerCase();
        noAnswer = false;

        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            console.log("Not an option, try again");
            noAnswer = true;
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

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
        let playerSelection = getPlayerChoice();
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