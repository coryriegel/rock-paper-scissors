function game() {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; playerWins < 5 && computerWins < 5; i++) {
        playRound();
    }
    function playRound() {
        let choices = [`ROCK`,`PAPER`,`SCISSORS`];
        let computerSelection = choices[Math.floor(Math.random()*choices.length)];
        console.log(computerSelection)
        let playerSelection = prompt(`ROCK, PAPER, OR SCISSORS?`);
        playerSelection = playerSelection.toUpperCase();
        console.log(playerSelection)

        if(playerSelection == `ROCK` && computerSelection == `PAPER`) {
            ++computerWins;
            alert(`You lost! Rock loses to paper!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
        else if(playerSelection == `ROCK` && computerSelection == `SCISSORS`) {
            ++playerWins;
            alert(`You won! Rock beats scissors!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }   
        else if(playerSelection == `SCISSORS` && computerSelection == `ROCK`) {
            ++computerWins;
            alert(`You lost! Scissors lose to rock!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
        else if(playerSelection == `SCISSORS` && computerSelection == `PAPER`) {
            ++playerWins;
            alert(`You won! Scissors beat paper!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
        else if(playerSelection == `PAPER` && computerSelection == `SCISSORS`) {
            ++computerWins;
            alert(`You lost! Paper loses to scissors!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
        else if(playerSelection == `PAPER` && computerSelection == `ROCK`) {
            ++playerWins;
            alert(`You won! Paper beats rock!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
        else if(playerSelection === computerSelection) {
            alert(`It's a tie! Do-over!\nYou: ${playerWins}\nComputer: ${computerWins}`);
        }
    }
    
    if(playerWins == 5) {
        alert(`Congratulations, you won the game!`);
        return `Thanks for playing!`;
    }
    else if(computerWins == 5) {
        alert(`Oh no! You lost the game!`);
        return `Better luck next time!`;
    }
}
alert(game())