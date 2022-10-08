function getComputerChoice() {
    let rand = Math.floor(Math.random() * 10);
    if (rand < 3) {
        return "Rock";
    } else if (rand < 6) {
        return "Paper";
    } else return "Scissors";
}

console.log(getComputerChoice());