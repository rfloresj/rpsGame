const readline = require('readline');
const { validateArgs } = require('./utils/validateArgs');
const { Game } = require('./models/Game');
const { promptUser } = require('./controllers/gameController');

const args = process.argv.slice(2);
validateArgs(args);

const game = new Game(args);
console.log(`HMAC: ${game.hmac}`);
game.showMoves();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

promptUser(rl, game, args);
