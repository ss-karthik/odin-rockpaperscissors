function game() {
    for (let i = 0; i < 5; i++) {
        play();
    }
}

function play() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    let computerSelection = getComputerChoice();

    let msg = checker(playerSelection, computerSelection);
    console.log(msg);
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function checker(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let msg = "It's A Draw"
        return msg;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            let msg = "You Lose! Paper Beats Rock!"
            return msg;
        }
        else {
            let msg = "You Win! Rock Beats Scissors!"
            return msg;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            let msg = "You Win! Paper Beats Rock!"
            return msg;
        }
        else {
            let msg = "You Lose! Scissors Beats Paper!"
            return msg;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            let msg = "You Lose! Rock Beats Scissors!"
            return msg;
        }
        else {
            let msg = "You Win! Scissors Beats Paper!"
            return msg;
        }
    }
}





