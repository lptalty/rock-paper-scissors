function computerSelection(){
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

function playRound(computerSelection, playerSelection){
}

console.log(computerSelection());
