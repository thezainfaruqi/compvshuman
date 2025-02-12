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

const humanScore = 0
const computerScore = 0