let playerScore = 0;
let compScore = 0;
let tieScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
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
        victorScreen.style.display = 'flex';
        buttons.forEach(choice => choice.removeEventListener('click', playGame));
    }
}

const buttons = document.querySelectorAll('.buttons button');
const roundResult = document.querySelector('.result');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');
const tieCount = document.querySelector('.tie-count');
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.comp-choice');
const finalVictor = document.querySelector('.final-victor');
const victorScreen = document.querySelector('.victor-screen');
const closeButton = document.querySelector('.close-button');
const retryButton = document.querySelector('.victor-screen button');

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

function closeScreen() {
    victorScreen.style.display = 'none';
}
closeButton.addEventListener('click', closeScreen);

function resetGame() {
    closeScreen();
    playerScore = 0;
    compScore = 0;
    tieScore = 0;
    playerChoice.textContent = '';
    compChoice.textContent = '';
    roundResult.textContent = '';
    winCount.textContent = `Player: ${playerScore}`;
    lossCount.textContent = `Machine: ${compScore}`;
    tieCount.textContent = `Tie Games: ${tieScore}`;
    buttons.forEach(choice => choice.addEventListener('click', playGame));
}
retryButton.addEventListener('click', resetGame);