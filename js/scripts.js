function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}
//Business Logic

function GameState() {
  this.score = [0,0];
  this.player = 0;
  this.turnScore = 0;
  this.diceResult = 0;
};

GameState.prototype.switchPlayers = function() {
  this.turnScore = 0;
  this.player += 1;
  this.player = this.player%2;
}

GameState.prototype.rollDice = function() {
  this.diceResult = diceRoll();
  if (this.diceResult <= 1) {
    this.switchPlayers();
  } else {
    this.turnScore += this.diceResult;
    if ((this.score[this.player] + this.turnScore) > 100) {
      return ("Winner " + this.player + "!");
    }
  }
}

GameState.prototype.hold = function() {
  this.score[this.player] += this.turnScore;
  this.switchPlayers();
}

//UI Logic

