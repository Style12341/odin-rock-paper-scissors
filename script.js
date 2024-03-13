function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  let answer = "";
  switch (randomNumber) {
    case 0:
      answer = "rock";
      break;
    case 1:
      answer = "paper";
      break;
    case 2:
      answer = "scissors";
      break;
  }
  return answer;
}
function playRound(playerSel, computerSel) {
  if (playerSel === computerSel) {
    return "It's a tie!";
  }
  if (playerSel === "rock")
    if (computerSel === "scissors") return "You win! Rock beats scissors";
    else return "You lose! Paper beats rock";
  if (playerSel === "paper")
    if (computerSel === "rock") return "You win! Paper beats rock";
    else return "You lose! Scissors beats paper";
  else if (playerSel === "scissors")
    if (computerSel === "paper") return "You win! Scissors beats paper";
    else return "You lose! Rock beats scissors";
}
function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) playerWins++;
    else if (result.includes("lose")) computerWins++;
  }
  if (playerWins > computerWins) console.log("You won!");
  else if (playerWins < computerWins) console.log("You lost!");
  else console.log("It's a tie!");
}
playGame();
