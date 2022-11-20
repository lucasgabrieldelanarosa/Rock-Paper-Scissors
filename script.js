const userChoiceDisplay = document.getElementById('userChoiceDisplay')
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.substring(1)
    getComputerChoice();
    getResult();
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
        resultDisplay.innerHTML = "Draw"
    }else if(userChoice === 'rock' && computerChoice === 'paper'){
        resultDisplay.innerHTML = "L"
    }else if(userChoice === 'rock' && computerChoice === 'scissors'){
        resultDisplay.innerHTML = "Win"
    }else if(userChoice === 'paper' && computerChoice === 'scissors'){
        resultDisplay.innerHTML = "L"
    }else if(userChoice === 'paper' && computerChoice === 'rock'){
        resultDisplay.innerHTML = "Win"
    }else if(userChoice === 'scissors' && computerChoice === 'rock'){
        resultDisplay.innerHTML = "L"
    }else if(userChoice === 'scissors' && computerChoice === 'paper'){
        resultDisplay.innerHTML = "Win"
    }
}