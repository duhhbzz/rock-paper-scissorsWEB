function getComputerChoice() {
    let cpuChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return cpuChoice[Math.floor(Math.random() *cpuChoice.length)];
}

function playRound(playerSelection, cpuSelection) {

    // ensures player's selection is always lower case
    playerSelection = playerSelection.toLowerCase();

    //Error Handlers
    // Check if playerSelection is a valid choice
    if (!['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(playerSelection)) {
        return 'Invalid player selection. Please choose from: Rock, Paper, Scissors, Lizard, or Spock';
    }

    // Check if cpuSelection is a valid choice
    if (!['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(cpuSelection)) {
        return 'Invalid CPU selection. Internal Error. Please try again';
    }

    // determines the winning logic
    // example:
    // rock: BEATS ['scissors', 'lizard']
    /* rules "according to sheldon":
        Scissors cuts paper
        paper covers rock
        rock crushes lizard
        lizard poisons Spock
        Spock smashes scissors
        scissors decapitates lizard
        lizard eats paper
        paper disproves Spock
        Spock vaporizes rock
        and as it always has, rock crushes scissors
    */
    const winningChoices = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['paper', 'spock'],
        spock: ['rock', 'scissors']
    };

    if (playerSelection === cpuSelection) {
        return `It's a tie! Both chose ${playerSelection}.`;
    }

    if (winningChoices[playerSelection].includes(cpuSelection)) {
        return `You win! ${playerSelection} beats ${cpuSelection}`;
    }

    if (winningChoices[cpuSelection].includes(playerSelection)) {
        return `You lose! ${cpuSelection} beats ${playerSelection}`;
    }
}

// testing
const playerSelection = "Spock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));