let ps = 0;
let cs = 0;
let playerScore = document.querySelector(".hum-score");
let computerScore = document.querySelector(".comp-score")

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", function() {
    play('rock');
});
paper.addEventListener("click", function() {
    play('paper');
});

scissors.addEventListener("click", function() {
    play('scissors');
});


function play(playerSelection) {
    let computerSelection = getComputerChoice();

    let msg = checker(playerSelection, computerSelection);
    let msgbox =  document.querySelector(".message");
    msgbox.textContent = msg;

    if (ps === 5) {
        playerScore.textContent = 5;
        alert("Player score = 5. Player Wins!");
        location.reload();
    }
    else if (cs === 5) {
        computerScore.textContent = 5;
        alert("Computer score = 5. Computer Wins");
        location.reload();

    }
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
            cs++;
            computerScore.textContent=cs;
            return msg;
        }
        else {
            let msg = "You Win! Rock Beats Scissors!"
            ps++;
            playerScore.textContent=ps;
            return msg;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            let msg = "You Win! Paper Beats Rock!"
            ps++;
            playerScore.textContent=ps;
            return msg;
        }
        else {
            let msg = "You Lose! Scissors Beats Paper!"
            cs++;
            computerScore.textContent=cs;
            return msg;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            let msg = "You Lose! Rock Beats Scissors!"
            cs++;
            computerScore.textContent=cs;
            return msg;
        }
        else {
            let msg = "You Win! Scissors Beats Paper!"
            ps++;
            playerScore.textContent=ps;
            return msg;
        }
    }
}





