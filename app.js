function computerPlay(){
    //randomly return rock, paper, or scissors
    let computerChoice = Math.floor(Math.random() * Math.floor(3));
    if(computerChoice === 0){
        computerChoice = 'Rock'
    }else if(computerChoice === 1){
        computerChoice = 'Paper'
    }else{
        computerChoice = 'Scissors'
    }
    return computerChoice;
}

function playerInput(){
    let playChoice = prompt('Rock, Paper, or Scissors?');
    return playChoice.toLowerCase(); 
   }

function playRound(computerSelection, playerSelection){
    if(computerSelection === 'Rock'){
                if(playerSelection === 'rock'){
                    return 'Tie!'
                } else if(playerSelection === 'paper'){
                    return 'You win! Paper covers rock!'
                } else{
                    return 'You lose! Rock beats Scissors!'
                }
             } else if(computerSelection === 'Paper'){
                 if(playerSelection === 'rock'){
                    return 'You lose! Paper covers rock!'
                } else if(playerSelection === 'paper'){
                    return 'Tie!'
                } else{
                    return 'You win! Scissors cuts paper!'
                }
             } else if(computerSelection === 'Scissors'){
                 if(playerSelection === 'rock'){
                    return 'You win! Rock smashes scissors!'
                } else if(playerSelection === 'paper'){
                    return 'You lose! Scissors cuts paper!'
                } else{
                    return 'Tie!'
                }
             } else {
                 return 'Please write rock, paper, or scissors'
             }
}

function game(){
    for(let i = 0; i<5; i++){
        console.log(playRound(computerPlay(), playerInput()))
    }

    
}


console.log(game());

