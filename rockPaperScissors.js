function playerPlays(){
    let playerSelection = prompt('Enter Rock, Paper, or Scissors');
    playerSelection =playerSelection.toLowerCase();
    return playerSelection;
}

function computerPlays(){
    let randomNum = Math.random();
    let computerSelection;
    if(randomNum <= .333)
    {
         computerSelection = 'rock';
         return computerSelection;
    }
    else if(randomNum <= 0.666)
    {
         computerSelection = 'paper';
         return computerSelection;
         
    }
    else
    {
         computerSelection = 'scissors';
         return computerSelection;

    }

}

function playRound()
{
    let playerChoice = playerPlays();
    let computerChoice = computerPlays();

     if(playerChoice === computerChoice)
     {
         return 'This round was a tie';
     }
     else if(playerChoice === 'rock' && computerChoice === 'paper')
     {
         return 'Computer Wins';
     }
     else if(playerChoice === 'rock' && computerChoice === 'scissors')
     {
         return 'You Win';
     }
     else if(playerChoice === 'paper' && computerChoice === 'scissors')
     {
         return 'Computer Wins';
     }
     else if(playerChoice === 'paper' && computerChoice === 'rock')
     {
         return 'You Win';
     }
     else if(playerChoice === 'scissors' && computerChoice === 'rock')
     {
         return 'Computer Wins';
     }
     else if(playerChoice === 'scissors' && computerChoice === 'paper')
     {
         return 'You Win';
     }

}

let playerWinCount = 0;
let computerWinCount = 0;
function game()
{
    while(playerWinCount < 3 && computerWinCount < 3)
    {
        let winner = playRound();
        console.log(winner);
        if(winner === 'You Win')
        {
            playerWinCount++;
        }
        else if(winner === 'Computer Wins')
        {
            computerWinCount++;
        }
    }
    if(playerWinCount === 3)
    {
        console.log('Congratulations You Won The Game!!!!');
    }
    else
    {
        console.log('Computer Wins, Sorry Better Luck Next Time')
    }
}

