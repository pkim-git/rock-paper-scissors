function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * 3)
    return choices[random]
}


const pPlayer = document.querySelector('#player')
const pComptuer = document.querySelector('#computer')
const pGame = document.querySelector('#game')
let playerScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection) {
    
    const div = document.querySelector('.result')
    computerSelection = getComputerChoice()

    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
                result = "Computer chose scissors. You win!"
                playerScore += 1
                pPlayer.textContent = "Player score: " + playerScore
    }
            
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = "Computer chose paper. You lose!"
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = "Computer chose scissors. You lose!"
    }
    
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = "Computer chose rock. You win!"
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = "Computer chose rock. You lose!"
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = "Computer chose paper. You win!"
    }

    else  if   (playerSelection === computerSelection) {
        result = `Computer also chose ${playerSelection}. It's a tie!`
    }


    div.textContent = result
    winner()
}


function winner() {
    if (playerScore == 5) {
        pGame.textContent = "Player wins 5 round game!"
    }
    else if (computerScore == 5) {
        pGame.textContent = "Computer wins 5 round game!"
    }
}

// function game() {

//     for (let i = 0; i < 5; i++) {
        
        
//         let result = playRound(playerSelection,computerSelection)
//         playRound(playerSelection, computerSelection)

//         if (result.slice(-4) == "win!") {
//             playerScore += 1
//         }
//         else if (result.slice(-5) == "lose!") {
//             computerScore +=1
//         }
        
//         pPlayer.textContent = ("Player score: " + playerScore);
//         console.log("Computer score: " + computerScore);
        
//         if (i == 4 && playerScore > computerScore) {
//             console.log("Game over, player wins!")
//         }
//         else if (i == 4 && computerScore > playerScore) {
//             console.log("Game over, computer wins!")
//         }
//         else if  (i==4 && computerScore == playerScore) {
//             console.log("Game over, tie game!")
//         }
//         console.log('-------------------------------')
//     }

    
// }

const computerSelection = getComputerChoice()



const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id, computerSelection)
    });
})

