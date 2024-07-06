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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('Computer wins! Paper beats rock.')
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('Player wins! Paper beats rock.')
        playerScore++
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Player wins! Rock beats scissors.')
        playerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Computer wins! Rock beats scissors.')
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer wins! Scissors beat paper.')
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Player wins! Scissors beat paper.')
        playerScore++
    } else {
        console.log('Tie, play again.')
        playRound(getHumanChoice(), getComputerChoice())
    }
}


const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})