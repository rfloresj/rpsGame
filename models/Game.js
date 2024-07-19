const { KeyGenerator } = require('../utils/KeyGenerator');
const { HMACGenerator } = require('../utils/HMACGenerator');
const crypto = require('crypto');

class Game {
  constructor(moves) {
    this.moves = moves;
    this.key = KeyGenerator.generateKey();
    this.computerMove = this.getRandomMove();
    this.hmac = HMACGenerator.generateHMAC(this.key, this.computerMove);
  }

  getRandomMove() {
    const randomIndex = crypto.randomInt(this.moves.length);
    return this.moves[randomIndex];
  }

  determineWinner(userMove) {
    const userIndex = this.moves.indexOf(userMove);
    const computerIndex = this.moves.indexOf(this.computerMove);
    const half = Math.floor(this.moves.length / 2);

    if (userIndex === computerIndex) {
      return 'Draw';
    } else if (
      (userIndex - computerIndex + this.moves.length) % this.moves.length <=
      half
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }

  showMoves() {
    console.log('Available moves:');
    this.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
    console.log('0 - exit');
    console.log('? - help');
  }
}

module.exports = { Game };
