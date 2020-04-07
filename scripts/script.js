//caching the DOM;
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score")
var computerScore_span = document.getElementById("computer-score")
var scoreBoard_div = document.querySelector(".score-board")
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return 'rock';
    if(letter === 'p') return 'paper';
    return 'scissors';
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${userWord} beats ${convertToWord(computer)}${compWord}. you win! 🔥 `
    document.getElementById(user).classList.add('green-glow');
    //seting a timer to remve this property
    setTimeout(()=> {document.getElementById(user).classList.remove('green-glow')}, 1000)
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(user)}${userWord} looses to ${convertToWord(computer)}${compWord}. you LOOSER!👿 `

    document.getElementById(user).classList.add('red-glow');
    //seting a timer to remve this property
    setTimeout(()=> {document.getElementById(user).classList.remove('red-glow')}, 1000)
}

function draw(user, computer) {
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(user)}${userWord} Cancels ${convertToWord(computer)}${compWord}. it's a DRAW😥`
    document.getElementById(user).classList.add('grey-glow');
    //seting a timer to remve this property
    setTimeout(()=> {document.getElementById(user).classList.remove('grey-glow')}, 1000)
}

function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click', ()=> {game("r")})
paper_div.addEventListener('click', ()=> {game("p")})
scissors_div.addEventListener('click', ()=> {game("s")})
}

main();

//use functions to perform small tasks



