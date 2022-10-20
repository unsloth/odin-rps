let playerScore = 0;
let compScore = 0;
let tieScore = 0;

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
            tieScore++;
            return "Tied!";
            break;
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            playerScore++;
            return "Round Won!";
            break;
        default: 
            compScore++;
            return "Round Lost!";
    }
}

function checkGameEnd() {
    if (playerScore === 5 || compScore === 5) {
        let victor = playerScore > compScore ? ('Player Wins') : ('Computer Wins');
        finalVictor.textContent = victor;
    }
}

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.result');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');
const tieCount = document.querySelector('.tie-count');
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.comp-choice');
const finalVictor = document.querySelector('.final-victor');

function playGame(e) {
    let player = this.classList.value;
    let comp = getComputerChoice();
    result = compareChoices(player, comp);

    playerChoice.textContent = `${player.toUpperCase()}`;
    compChoice.textContent = `${comp.toUpperCase()}`;
    roundResult.textContent = `${result}`;
    winCount.textContent = `Player: ${playerScore}`;
    lossCount.textContent = `Machine: ${compScore}`;
    tieCount.textContent = `Tie Games: ${tieScore}`;

    checkGameEnd();
}

buttons.forEach(choice => choice.addEventListener('click', playGame));