function getComputerChoice() {
    let choice = Math.random() * 3
    if (choice === 0) return 'rock'
    if (choice === 1) return 'paper'
    return 'scissors'
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let message = ''
    let winningSelection = ''
    let losingSelection = ''

    if (playerSelection == computerSelection) { 
        return "Draw!"
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
            playerSelection == 'paper' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'rock') {
        winningSelection = playerSelection;
        losingSelection = computerSelection;
        message += 'You Win!'
    } else {
        winningSelection = computerSelection;
        losingSelection = playerSelection;
        message += 'You Lose!'
    }

    return `${message} ${winningSelection} beats ${losingSelection}!`
}

function game() {
    let playerSelection = prompt('Select "rock", "paper", or "scissors"')
    let computerSelection = getComputerChoice()

    let message = playRound(playerSelection, computerSelection)

    console.log(message)
}

var games = 5;
while (games > 0){
    console.log(`Games Remaining: ${games}`)
    game()
    games -= 1
}
