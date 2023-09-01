let playerScore = 0
let drawScore = 0
let computerScore = 0

function newGame() {
    playerScore = 0
    drawScore = 0
    computerScore = 0
}

function updateScore() {
    playerScoreElement.textContent = playerScore
    drawScoreElement.textContent = drawScore
    computerScoreElement.textContent = computerScore
}

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
        drawScore += 1
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
            playerSelection == 'paper' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'rock') {
        playerScore += 1
        winningSelection = playerSelection;
        losingSelection = computerSelection;
    } else {
        computerScore += 1
        winningSelection = computerSelection;
        losingSelection = playerSelection;
    }

    return winningSelection == losingSelection ? 'DRAW!' : `${winningSelection} beats ${losingSelection}!`.toUpperCase()
}

function game(playerSelection) {
    let computerSelection = getComputerChoice()

    let message = playRound(playerSelection, computerSelection)

    updateScore()
    changeStatus(message)
}

function playGame(e) {
    game(e.srcElement.firstChild.data)
}

const playerButtons = document.querySelectorAll(".player-choice")
playerButtons.forEach( btn => btn.addEventListener("click", playGame))

const statusElement = document.querySelector(".game-status")
const playerScoreElement = document.querySelector("#player-score")
const drawScoreElement = document.querySelector("#draw-score")
const computerScoreElement = document.querySelector("#computer-score")

function changeStatus(s) {
    statusElement.textContent = s
}