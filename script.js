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

function getHumanChoice() {
    let input = prompt("Please type your choice, rock/paper/scissors")
    return input
}
  
function playgame() {

    let humanScore = 0;      
    let computerScore = 0;  
    let roundNumber = 0 

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

    while (roundNumber < 5) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice)); 
        roundNumber++
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playgame();