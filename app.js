
let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const result_div = document.getElementById('result') 

function computerPlay(){
    //randomly return rock, paper, or scissors
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        computerChoice = 'rock'
    }else if(computerChoice === 1){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissors'
    }
    return computerChoice;
}

// function playerInput(){
//     //going to comment this out and see if I can just return the clicked button
//     //let playChoice = prompt('Rock, Paper, or Scissors?');
//     //return playChoice.toLowerCase(); 
//     console.log('working')
//     return 'rock';
//    }

function playRound(playerSelection){
    const computerSelection = computerPlay();
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            draw()
        } else if(computerSelection === 'paper'){
            lose();
        } else{
            win(playerSelection, computerSelection)
        }
    } else if(playerSelection === 'paper'){
            if(computerSelection === 'rock'){
            win()
        } else if(computerSelection === 'paper'){
            draw()
        } else{
            lose()
        }
    } else if(playerSelection === 'scissors'){
            if(computerSelection === 'rock'){
            lose()
        } else if(computerSelection === 'paper'){
            win()
        } else{
            draw()
        }
        } else {
            return 'Please write rock, paper, or scissors'
        }
}

//this function is no longer necessary when the game isn't being played within the console
// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//         for(let i = 0; i<5; i++){
//         let result = playRound(playerInput(), computerPlay());
//         console.log(result);
//             if(result.includes('win')){
//                 playerScore++;
//             } else if(result.includes('lose')){
//                 computerScore++;
//             }
//         }   
//     if(playerScore === computerScore){
//         alert('The result of the game is a tie!') 
//     } else if(playerScore > computerScore){
//         alert('You win the game!') 
//     } else {
//         alert('You lose the game!') 
//     }
// }

function win(){
    userScore++
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'WIN';
    if(userScore === 5){
        setTimeout(function(){ alert("YOU WIN"); }, 250);
        setTimeout(function(){location.reload();}, 300);
    }
    return;
}

function lose(){
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'LOSE';
    if(computerScore === 5){
        setTimeout(function(){ alert("YOU LOSE"); }, 250);
        setTimeout(function(){location.reload();}, 300);
    }
    return;

}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'DRAW';
    return;
}

const rock = document.querySelector('#btn-rock')
const paper = document.querySelector('#btn-paper')
const scissors = document.querySelector('#btn-scissors')

rock.addEventListener('click', function(){
    return console.log(playRound('rock'))
});

paper.addEventListener('click', function(){
    console.log(playRound('paper'))
})
scissors.addEventListener('click', function(){
    console.log(playRound('scissors'))
})

