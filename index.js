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
        message += 'You Win!'
    } else {
        message += 'You Lose!'
    }

    return `${message} ${winningSelection} beats ${losingSelection}!`
}
