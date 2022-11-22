const userChoiceDisplay = document.getElementById('userChoiceDisplay')
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const possibleChoices = document.querySelectorAll('button')
const rockButton = document.querySelector('.btnrock')
const paperButton = document.querySelector('.btnpaper')
const scissorsButton = document.querySelector('.btnscissors')
const button = document.querySelector('.btn')
let userChoice
let computerChoice
let round = 0
let playerWins = 0
let computerWins = 0
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.substring(1)
    getComputerChoice();
    getResult();
    game();
}))

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 +1);
    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1)
}

function getResult() {
    if(computerChoice === userChoice){
        result = 'Draw'
        resultDisplay.innerHTML = result
    }else if(userChoice === 'rock' && computerChoice === 'paper'){
        result = 'L'
        resultDisplay.innerHTML = result
        computerWins++
    }else if(userChoice === 'rock' && computerChoice === 'scissors'){
        result = 'Win'
        resultDisplay.innerHTML = result
        playerWins++
    }else if(userChoice === 'paper' && computerChoice === 'scissors'){
        result = 'L'
        resultDisplay.innerHTML = result
        computerWins++
    }else if(userChoice === 'paper' && computerChoice === 'rock'){
        result = 'Win'
        resultDisplay.innerHTML = result
        playerWins++
    }else if(userChoice === 'scissors' && computerChoice === 'rock'){
        result = 'L'
        resultDisplay.innerHTML = result
        computerWins++
    }else if(userChoice === 'scissors' && computerChoice === 'paper'){
        result = 'Win'
        resultDisplay.innerHTML = result
        playerWins++
    }
}

function game(){
    if(round < 5){
        round++
        console.log(round)
        const newElement = document.createElement('li')
        const elementText = document.createTextNode(result)
        newElement.appendChild(elementText)
        const body = document.querySelector('#ul-historic')
        body.appendChild(newElement)
    }
    if(round === 5){
        let winner 
        if(playerWins > computerWins){
            winner = 'Player.'
        }else if(computerWins > playerWins){
            winner = 'Computer.'
        }else{
            winner = 'Draw.'
        }
        
        const divWinner = document.getElementById('div-winner')
        switch(winner){
            case "Player.":
            case "Computer.":        
            divWinner.innerText = 'The winner is: ' + winner
            rockButton.setAttribute('disabled', '');
            paperButton.setAttribute('disabled', '');
            scissorsButton.setAttribute('disabled', '');
                    break;
            case "Draw.":
                divWinner.innerText = "Draw. It's your last chance."
                round = 4;
                break;
        }
    }
}