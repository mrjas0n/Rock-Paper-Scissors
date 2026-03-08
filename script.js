// random number
function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// computer choice
function getComputerChoice() {
    const random = GetRandomInt(3);

    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissors";
}

// human choice
function getHumanChoice() {
    const choice = prompt("Please input rock, paper, or scissors:");
    return choice.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie");
        } 
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win this round");
            humanScore++;
        } 
        else {
            console.log("You lose this round");
            computerScore++;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
}

playGame();