// gameController.js
const { HelpTable } = require('../models/HelpTable');

function promptUser(rl, game, args) {
  rl.question('Enter your move: ', (input) => {
    if (input === '0') {
      rl.close();
    } else if (input === '?') {
      const helpTable = new HelpTable(args);
      helpTable.generateTable();
      game.showMoves();
      promptUser(rl, game, args);
    } else {
      const userIndex = parseInt(input, 10) - 1;
      if (isNaN(userIndex) || userIndex < 0 || userIndex >= args.length) {
        console.log('Invalid move. Please try again.');
        game.showMoves();
        promptUser(rl, game, args);
      } else {
        const userMove = args[userIndex];
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${game.computerMove}`);
        console.log(game.determineWinner(userMove));
        console.log(`HMAC key: ${game.key}`);
        rl.close();
      }
    }
  });
}

module.exports = { promptUser };
