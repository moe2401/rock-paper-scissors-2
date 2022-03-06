//DOM variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//randomized computer choice
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function letterToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function userWin(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} beats ${letterToWord(computerChoice)}${smallCompWord}. User wins!`;
}

function computerWin(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    result_p.innerHTML = `${letterToWord(computerChoice)}${smallCompWord} beats ${letterToWord(userChoice)}${smallUserWord}. Computer wins!`;
}

function draw(userChoice, computerChoice){
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    result_p.innerHTML = `${letterToWord(computerChoice)}${smallCompWord} equals ${letterToWord(userChoice)}${smallUserWord}. It is a draw!`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            computerWin(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }
}



function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

    main();




