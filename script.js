let humanScore = 0;      
let computerScore = 0;  
let roundNumber = 0 


const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissor")
const message = document.querySelector(".message")

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let randomNum = Math.random(); 

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    const human = humanChoice; 
    const computer = computerChoice; 
    let resultMsg = "";

    if (human === computer) {
        resultMsg = `It's a tie! Both chose ${human}`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++
        resultMsg = `You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`; // human.charAt(0) to cap "r" => "R" and slice(1) = ock 
            
    } else {
        computerScore++
        resultMsg = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`;
    }   
    
    roundNumber++ // after everything done ill just increment it by one
    message.textContent = resultMsg; // displays the message

    if (humanScore == 5) {
        message.textContent = "You won the game!";
        resetGame()
    } else if (computerScore == 5) {
        message.textContent = "You lost the game!";
        resetGame()
    } else if (humanScore == computerScore) {
        message.textContent = "Its a tie!"; 
        resetGame()
    }

}

function resetGame() {
    // Reset scores and round number for a new game
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
} // This reset's the game



