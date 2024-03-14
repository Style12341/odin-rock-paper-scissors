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
function playerWinsRound() {
  playScore.textContent++;
  resultText.classList.add("win");
  resultText.classList.remove("lose");
}
function computerWinsRound() {
  compScore.textContent++;
  resultText.classList.add("lose");
  resultText.classList.remove("win");
}
function playRound(playerSel, computerSel) {
  if (playScore.textContent == "5" || compScore.textContent == "5") return;
  if (playerSel === computerSel) {
    resultText.textContent = "It's a tie!";
    resultText.classList.remove("win");
    resultText.classList.remove("lose");
    return "It's a tie!";
  }
  if (playerSel === "rock")
    if (computerSel === "scissors") {
      playerWinsRound();
      resultText.textContent = "You win! Rock beats scissors!";
    } else {
      computerWinsRound();
      resultText.textContent = "You lose! Paper beats rock!";
    }
  if (playerSel === "paper")
    if (computerSel === "rock") {
      playerWinsRound();
      resultText.textContent = "You win! Paper beats rock!";
    } else {
      computerWinsRound();
      resultText.textContent = "You lose! Scissors beats paper!";
    }
  else if (playerSel === "scissors")
    if (computerSel === "paper") {
      playerWinsRound();
      resultText.textContent = "You win! Scissors beats paper!";
    } else {
      computerWinsRound();
      resultText.textContent = "You lose! Rock beats scissors!";
    }

  if (playScore.textContent == "5") setPlayerWinner();
  if (compScore.textContent == "5") setComputerWinner();
}
function resetProcedure() {
  playScore.textContent = 0;
  compScore.textContent = 0;
  resultText.textContent = "";
  playerCard.classList.remove("win");
  computerCard.classList.remove("win");
  playerCard.classList.remove("lose");
  computerCard.classList.remove("lose");
  content;
  let resetButton = document.querySelector("#reset");
  resetButton.remove();
  resultText.textContent = "";
}
function setPlayerWinner() {
  resultText.textContent = "You won!";
  resultText.classList.add("class", "win");
  playerCard.classList.add("win");
  computerCard.classList.add("lose");
  let resetButton = document.createElement("button");
  resetButton.id = "reset";
  resetButton.textContent = "Play again?";
  resetButton.addEventListener("click", resetProcedure);
  content.appendChild(resetButton);
}
function setComputerWinner() {
  resultText.textContent = "You lost!";
  resultText.classList.add("class", "lose");
  playerCard.classList.add("lose");
  computerCard.classList.add("win");
  let resetButton = document.createElement("button");
  resetButton.id = "reset";
  resetButton.textContent = "Play again?";
  resetButton.addEventListener("click", resetProcedure);
  content.appendChild(resetButton);
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
