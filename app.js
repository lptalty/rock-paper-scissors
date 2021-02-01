function computerPlay(){
    //randomly return rock, paper, or scissors
    let computerChoice = Math.floor(Math.random() * Math.floor(3));
    if(computerChoice === 0){
        computerChoice = 'rock'
    }else if(computerChoice === 1){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissors'
    }
    return computerChoice;
}

function playerInput(){
    let playChoice = prompt('Rock, Paper, or Scissors?');
    return playChoice.toLowerCase(); 
   }

function playRound(playerSelection, computerSelection){
            if(playerSelection === 'rock'){
                if(computerSelection === 'rock'){
                    return 'Tie!'
                } else if(computerSelection === 'paper'){
                    return 'You lose! Paper covers rock!'
                } else{
                    return 'You win! Rock smashes scissors!'
                }
             } else if(playerSelection === 'paper'){
                 if(computerSelection === 'rock'){
                    return 'You win! Paper covers rock!'
                } else if(computerSelection === 'paper'){
                    return 'Tie!'
                } else{
                    return 'You lose! Scissors cuts paper!'
                }
             } else if(playerSelection === 'scissors'){
                 if(computerSelection === 'rock'){
                    return 'You lose! Rock smashes scissors!'
                } else if(computerSelection === 'paper'){
                    return 'You win! Scissors cuts paper!'
                } else{
                    return 'Tie!'
                }
             } else {
                 return 'Please write rock, paper, or scissors'
             }
}

function game(){
    for(let i = 0; i<5; i++){
        console.log(playRound(playerInput(), computerPlay()))
    }

    
}


console.log(game());

