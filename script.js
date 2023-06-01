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

function game() {
    let playerScore = 0;
    let cpuScore = 0;
  
    while (playerScore < 5 && cpuScore < 5) {
      let playerChoice = prompt("Select one: Rock, Paper, Scissors, Lizard, or Spock: ");
      let cpuChoice = getComputerChoice();
      let outcome = playRound(playerChoice, cpuChoice);
  
      if (outcome.startsWith("You win!")) {
        playerScore++;
      }
  
      if (outcome.startsWith("You lose!")) {
        cpuScore++;
      }
  
      console.log(outcome);
    }
  
    let winner;
    if (playerScore === 5) {
      winner = "Player";
    }
  
    if (cpuScore === 5) {
      winner = "Computer";
    }
  
    console.log(`Final Scores - Player: ${playerScore} | Computer: ${cpuScore}`);
    console.log(`Winner: ${winner}`);
  }

  game();