function getComputerChoice() {
    let choice = Math.random() * 3
    if (choice === 0) return 'rock'
    if (choice === 1) return 'paper'
    return 'scissors'
}
