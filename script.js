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
    const results = document.querySelector('#results')

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        results.textContent = 'Computer wins! Paper beats rock.'
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        results.textContent = 'Player wins! Paper beats rock.'
        playerScore++
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        results.textContent = 'Player wins! Rock beats scissors.'
        playerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        results.textContent = 'Computer wins! Rock beats scissors.'
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        results.textContent = 'Computer wins! Scissors beat paper.'
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        results.textContent = 'Player wins! Scissors beat paper.'
        playerScore++
    } else {
        results.textContent = 'Tie!'
    }
    checkForWinner(playerScore, computerScore)
}

function checkForWinner(pScore, cScore) {
    const score = document.querySelector('#score')

    score.textContent = `Score: ${pScore} - ${cScore}`

    if (playerScore >= 5) {
        score.textContent += ' Player wins the game!'

        // Change the global variables
        playerScore = 0
        computerScore = 0
    } else if (computerScore >= 5) {
        score.textContent += ' Computer wins the game!'

        // Change the global variables
        playerScore = 0
        computerScore = 0
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
