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

//changes result message letter to a word (e.g. r to rock)
function letterToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

//these changes happen when user wins
function userWin(userChoice, computerChoice){
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} beats ${letterToWord(computerChoice)}${smallCompWord}. User wins!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow")
    , 300);
}


//these changes happen when computer wins
function computerWin(userChoice, computerChoice){
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${letterToWord(computerChoice)}${smallCompWord} beats ${letterToWord(userChoice)}${smallUserWord}. Computer wins!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

//these changes happen when it is a draw
function draw(userChoice, computerChoice){
    const smallUserWord = " (user)".fontsize(3).sup();
    const smallCompWord = " (comp)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${letterToWord(computerChoice)}${smallCompWord} equals ${letterToWord(userChoice)}${smallUserWord}. It is a draw!`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

//calculating who wins
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

//triggers game function based on what user clicks on
function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

    main();




