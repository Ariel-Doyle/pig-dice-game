function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}

//Business Logic

function GameState() {
  this.score = [0,0];
  this.player = 0;
  this.turnScore = 0;
  this.diceResult = 0;
  this.rollHistory = [];
};

GameState.prototype.switchPlayers = function() {
  this.turnScore = 0;
  this.player += 1;
  this.player = this.player%2;
  this.rollHistory = [];
}

GameState.prototype.rollDice = function() {
  this.diceResult = diceRoll();
  if (this.diceResult === 1) {
    this.switchPlayers();
  } else {
    this.turnScore += this.diceResult;
    this.rollHistory.push(this.diceResult);
    if ((this.score[this.player] + this.turnScore) > 100) {
      return ("The Winner Is " + this.player + "!");
    }
  }
}

GameState.prototype.hold = function() {
  this.score[this.player] += this.turnScore;
  this.switchPlayers();
}

//UI Logic
let gameState = new GameState();

function handleRoll() {
  gameState.rollDice();
  let rollScore = gameState.rollHistory;
  console.log(gameState.diceResult);
  if (gameState.player === 0) {
    document.querySelector("span#player1Roll").innerText = rollScore;
  } else if (gameState.player === 1) {
    document.querySelector("span#player2Roll").innerText = rollScore;
  }
};

function handleHold() {
  gameState.hold();
  let scoreTotal = gameState.score;
  console.log(scoreTotal);
  document.querySelector("span#player1Score").innerText = scoreTotal[0];
  document.querySelector("span#player2Score").innerText = scoreTotal[1];
};

window.addEventListener("load", function(e) {
  e.preventDefault();
  const newGameBtn = document.getElementsByClassName("new-game");
  const rollBtn = document.getElementById("roll");
  const holdBtn = document.getElementById("hold");

  rollBtn.addEventListener("click", handleRoll);

  holdBtn.addEventListener("click", handleHold);
});  

// let currentScore = gameState.rollDice();
//   if (currentScore) {
//     document.querySelector("div#game-window").append(currentScore);
//   } else {
//     document.querySelector("div#game-window").innerText= null;
//   }


/*let gameState = new GameState();

function handleRoll(event) {
  event.preventDefault();
  document.getElementById("dice-value").innerText = null;
  document.querySelector("span#current-score").innerText = null;
  gameState.rollDice();
  console.log("dice result" + gameState.diceResult)
  console.log("roll total" + gameState.turnScore)
  const rollingTotal = gameState.turnScore;
  const diceAmount = gameState.diceResult;
  document.getElementById("dice-value").innerText = diceAmount;
  document.getElementById("current-score").innerText = rollingTotal;
  let scoreTotal1 = gameState.score[0];
  let scoreTotal2 = gameState.score[1];
  if (rollingTotal === 0) {
    if (gameState.player === 1){
      document.getElementById("score-p1").innerText= scoreTotal1;
    } else if (gameState.player === 0){
      document.getElementById("score-p2").innerText= scoreTotal2;
    }
  }
  
};

function handleHold() {
  gameState.hold();
  document.querySelector("span#current-score").innerText = null;
  document.getElementById("dice-value").innerText = null;
  let scoreTotal1 = gameState.score[0];
  let scoreTotal2 = gameState.score[1];
  console.log("score Total: " + scoreTotal1);

  console.log("player object: " + gameState.player);
  if (gameState.player === 1){
    document.getElementById("score-p1").innerText= scoreTotal1;
  } else if (gameState.player === 0){
    document.getElementById("score-p2").innerText= scoreTotal2;
  }
};

window.addEventListener("load", function() {
  // const newGameBtn = document.getElementsByClassName("new-game");
  // const gameRulesBtn = document.getElementsByClassName("how-to");
  // const closeBtn = document.getElementsByClassName("close-how");
  const rollBtn = document.getElementById("roll");
  const holdBtn = document.getElementById("hold");

  rollBtn.addEventListener("click", handleRoll);

  holdBtn.addEventListener("click", handleHold);
}); */