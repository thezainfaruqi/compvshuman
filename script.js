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

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

function getHumanChoice() {
    let input = prompt("Please type your choice, rock/paper/scissors")
    return input
}

console.log(getHumanChoice())

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let humanScore = 0;      
let computerScore = 0;   

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase(); 
    const computer = computerChoice.toLowerCase(); 

    if (human === computer) {
        return `It's a tie! Both chose ${human}`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++
        return `You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`;
        
    } else {
        computerScore++
        return `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`;
        
    }
}
  
  const humanSelection = getHumanChoice()
  const computerSelection = getComputerChoice()
  
console.log(playRound(humanSelection, computerSelection))