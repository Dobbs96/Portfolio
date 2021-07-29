// Start Theme Switch ====================================================
var themeSwitcher = document.querySelector("#exampleSwitch");
var container = document.querySelector(".container");

var mode = "dark";
themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.classList.add("light");
    container.classList.remove("dark");
  } else {
    mode = "dark";
    container.classList.add("dark");
    container.classList.remove("light");
  }
});
// End Theme Switch ====================================================

// ====================Start THROW BACK R,P,S=====================================================
// Variables
var choices = "RPS".split("");
var scoreBoard = {
  ties: 0,
  wins: 0,
  loses: 0,
};
var playersChoice;
var cpuChoice;
// function
function pickRPS() {
  // players choice RPS
  var choice = prompt(
    `Lets Play Rock, Paper, Scissors!
---------------------------------
Please choose from R, P, S.`
  );
  playersChoice = choice.toUpperCase();
  if (playersChoice === "R" || playersChoice === "P" || playersChoice === "S") {
  } else {
    alert("Invalid Choice. Please choose from R, P, S.");
    playGame();
  }
  console.log(`Player 1 picked ${playersChoice}`);
}

// cpu Choice
function cpuRPS() {
  cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`CPU picked ${cpuChoice}`);
  return;
}

// compare who
//      ties
//      wins
//      loses
function tieWinLose() {
  if (playersChoice === cpuChoice) {
    alert(`-------Tie!--------
Your choice: ${playersChoice}
-------------------
CPUs choice: ${cpuChoice}
-------------------`);
    scoreBoard.ties++;
  } else if (
    (playersChoice === "R" && cpuChoice === "S") ||
    (playersChoice === "S" && cpuChoice === "P") ||
    (playersChoice === "P" && cpuChoice === "R")
  ) {
    alert(`---WINNER!!!----
Your choice: ${playersChoice}
-------------------
CPUs choice: ${cpuChoice}
-------------------`);
    scoreBoard.wins++;
  } else {
    alert(`----You Lose-----
Your choice: ${playersChoice}
-------------------
CPUs choice: ${cpuChoice}
-------------------`);
    scoreBoard.loses++;
  }
}

// score board
// play again
function score() {
  yes = confirm(`
Your score: ${scoreBoard.wins}
-------------------
CPUs score: ${scoreBoard.loses}
-------------------
Ties: ${scoreBoard.ties}
-------------------
Play Again?
`);
  if (yes) {
    playGame();
  } else {
    alert("Thanks for playing!");
  }
}

// playgame
function playGame() {
  pickRPS();
  cpuRPS();
  tieWinLose();
  score();
  return;
}
// ===================================End THROUGH BACK R,P,S=========================================
