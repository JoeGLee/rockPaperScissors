# rockPaperScissors
A game of rock paper scissors that plays for x rounds. The user will select between the three choices and play against a randomly generated choice by the computer. The first to win 3 rounds will be declared the winner.
Basic Program summary
-playerSelection will have a prompt that asks for the users choice after use toLowerCase function to make the input cap insensitive return that value to a comparison function 
-computerSelection will randomly generate a number between 0-1 making  rock <= 0.333, paper <=.666, and scissors <= 1 and return that value to the comparison
-Comparison will recive the two values (playerSelection and computerSelection) and compare the two values to each other using if statements
        if (playerSelection === 'rock' && computerSelection === 'paper')
            return 'Computer Wins This Round' , computerWin;


-put the functions in while loop that has two variables playerWin and computerWin
-after one counter hits three wins the loop ends and declares one player as the winner


