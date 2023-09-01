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

function game(playerSelection) {
    let computerSelection = getComputerChoice()

    let message = playRound(playerSelection, computerSelection)

    changeStatus(message)
}

function playGame(e) {
    game(e.srcElement.firstChild.data)
}

const playerButtons = document.querySelectorAll(".player-choice")
playerButtons.forEach( btn => btn.addEventListener("click", playGame))

const statusElement = document.querySelector(".game-status")

function changeStatus(s) {
    statusElement.textContent = s
}