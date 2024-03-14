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
    if (computerSel === "scissors") playScore.textContent++;
    else return compScore.textContent++;
  if (playerSel === "paper")
    if (computerSel === "rock") return playScore.textContent++;
    else return compScore.textContent++;
  else if (playerSel === "scissors")
    if (computerSel === "paper") return playScore.textContent++;
    else return compScore.textContent++;
}
let playScore = document.querySelector("#player-score");
let compScore = document.querySelector("#computer-score");
let content = document.querySelector(".content");
let playerCard = document.querySelector(".player-card");
let computerCard = document.querySelector(".computer-card");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resultText = document.querySelector(".result-text");

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
