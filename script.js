let choices = [`ROCK`,`PAPER`,`SCISSORS`];
let computerSelection = choices[Math.floor(Math.random()*choices.length)];
console.log(computerSelection)
let playerSelection = prompt(`ROCK, PAPER, OR SCISSORS?`);
playerSelection = playerSelection.toUpperCase();
console.log(playerSelection)

function playRound() {
    if(playerSelection == `ROCK` && computerSelection == `PAPER`) {
        alert(`You lost!`);
    }
    else if(playerSelection == `ROCK` && computerSelection == `SCISSORS`) {
        alert(`You won!`);
    }
    else if(playerSelection == `SCISSORS` && computerSelection == `ROCK`) {
        alert(`You lost!`);
    }
    else if(playerSelection == `SCISSORS` && computerSelection == `PAPER`) {
        alert(`You won!`);
    }
    else if(playerSelection == `PAPER` && computerSelection == `SCISSORS`) {
        alert(`You lost!`);
    }
    else if(playerSelection == `PAPER` && computerSelection == `ROCK`) {
        alert(`You won!`);
    }
    else if(playerSelection === computerSelection) {
        alert(`It's a tie!`);
    }
}
console.log(playRound())