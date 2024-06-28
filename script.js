let playerScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?').toLowerCase();

    if (!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) {
        console.log('Invalid choice, type "rock", "paper", or "scissors".');
        return getHumanChoice();
    };
    return choice;
};

function getComputerChoice() {
    let rng = Math.random() * 3
    
    if (rng <= 1) {
        return 'rock'
    } else if (rng <= 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
